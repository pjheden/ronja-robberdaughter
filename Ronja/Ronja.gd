extends KinematicBody2D

signal hit

export var walkspeed = 300 # pixels/sec
export var jumpspeed = -400
export var gravityscale = 1200
export var shoot_delay = 0.64

var arrow_scene = preload("res://Projectile/Arrow.tscn")

var screen_size
var vel = Vector2()
var jumping = false
var facing_right = true # What direction sonja is looking at
var shooting = false

var start_shoot_timer = null
var end_shoot_timer = null

func _ready():
	screen_size = get_viewport_rect().size
	$AnimatedSprite.play()
	
	# create timer for shoot_delay
	start_shoot_timer = Timer.new()
	start_shoot_timer.set_one_shot(true)
	start_shoot_timer.set_wait_time(shoot_delay)
	start_shoot_timer.connect("timeout", self, "shoot")
	add_child(start_shoot_timer)
	
	end_shoot_timer = Timer.new()
	end_shoot_timer.set_one_shot(true)
	end_shoot_timer.set_wait_time(shoot_delay)
	end_shoot_timer.connect("timeout", self, "end_shoot")
	add_child(end_shoot_timer)
	
func process_input():
	vel.x = 0
	var right = Input.is_action_pressed("ui_right")
	var left = Input.is_action_pressed("ui_left")
	var jump = Input.is_action_just_pressed("jump")
	var shoot = Input.is_action_just_pressed("shoot")
	 
	if jump and (is_on_floor() or is_on_wall()):
		jumping = true
#		$AnimatedSprite.animation = "jump"
		vel.y = jumpspeed
	if right:
		vel.x += walkspeed
		facing_right = true
	if left:
		vel.x -= walkspeed
		facing_right = false
	if shoot && !shooting:
		start_shoot()

func process_movement(delta):
	vel.y += gravityscale * delta
	if jumping and (is_on_floor() or is_on_wall()) and vel.y > 0:
		jumping = false
	var snap = Vector2.DOWN * 32 if !jumping else Vector2.ZERO
	vel = move_and_slide_with_snap(vel, snap, Vector2(0, -1)) # move_and_slide uses delta internally for the sliding part
	if abs(vel.x) < 1.0:
		vel.x = 0
	if abs(vel.y) < 1.0:
		vel.y = 0
	
func process_animation():
	if shooting:
		return
	if vel.x != 0 and not jumping:
		$AnimatedSprite.animation = "walk"
	elif vel.y != 0 and not ($AnimatedSprite.animation == "jump-idle" or $AnimatedSprite.animation == "jump-fwd"):
		if abs(vel.x) > 0:
			$AnimatedSprite.animation = "jump-fwd"
		else:
			$AnimatedSprite.animation = "jump-idle"
	elif vel.x == 0 and not jumping:
		$AnimatedSprite.animation = "idle"
	$AnimatedSprite.flip_h = not facing_right
	
func _process(delta):
	process_animation()
	
func _physics_process(delta):
	# Character is freezed while shooting
	if !shooting:
		process_input()
	else:
		vel.x = 0 # Stop any movement
	process_movement(delta)
	
	for i in get_slide_count():
		var collision = get_slide_collision(i)
		if "harmful" in collision.collider.get_groups():
			die()
	
# This method is only used when we use move_and_collide
func _on_Player_body_entered(body):
#	TODO: we need to disguish between what we enter, ie. shouldnt die from hitting platform
	pass

func die():
	hide()
	$CollisionShape2D.disabled = true
	emit_signal("hit")

func start_shoot():
	shooting = true
	# Start animation
	$AnimatedSprite.animation = "shoot"
	# Set timer for shoot
	start_shoot_timer.start()
		
func shoot():
	# TODO: this needs to be "delayed" in sync with the animation
	var arrow = arrow_scene.instance()
	# Spawn arrow at right muzzle and move in that direction
	if facing_right:
		arrow.transform = $right_muzzle.global_transform
	else:
		arrow.transform = $left_muzzle.global_transform
		arrow.transform.x *= -1
	# ADD sonjas movement to arrow speed
	arrow.bullet_speed += abs(vel.x)
	get_tree().get_root().add_child(arrow)
	
	end_shoot_timer.start()

func end_shoot():
	shooting = false
	
# start initializes the player by setting position, making sure its visible and
# all necessary components is enabled
func start(pos):
	position = pos
	show()
	$CollisionShape2D.disabled = false
