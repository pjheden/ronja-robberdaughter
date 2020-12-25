extends KinematicBody2D

signal hit

export var walkspeed = 300 # pixels/sec
export var jumpspeed = -400
export var gravityscale = 1200

var screen_size
var vel = Vector2()
var jumping = false

func _ready():
	screen_size = get_viewport_rect().size
	$AnimatedSprite.play()
	

func process_input():
	vel.x = 0
	var right = Input.is_action_pressed("ui_right")
	var left = Input.is_action_pressed("ui_left")
	var jump = Input.is_action_just_pressed("jump")
	
	if jump and (is_on_floor() or is_on_wall()):
		jumping = true
		vel.y = jumpspeed
	if right:
		vel.x += walkspeed
	if left:
		vel.x -= walkspeed

func process_movement(delta):
	vel.y += gravityscale * delta
	if jumping and (is_on_floor() or is_on_wall()):
		jumping = false
	vel = move_and_slide(vel, Vector2(0, -1)) # move_and_slide uses delta internally for the sliding part
	
func process_animation():
	if vel.x != 0:
		$AnimatedSprite.animation = "walk"
		$AnimatedSprite.flip_v = false
		# See the note below about boolean assignment
		$AnimatedSprite.flip_h = vel.x < 0
	else:
		$AnimatedSprite.animation = "idle"
	
func _process(delta):
	process_animation()
	
func _physics_process(delta):
	process_input()
	process_movement(delta)
	
	for i in get_slide_count():
		var collision = get_slide_collision(i)
		if "harmful" in collision.collider.get_groups():
			die()
			
	
# This method is only used when we use move_and_collide
func _on_Player_body_entered(body):
#	TODO: we need to disguish between what we enter, ie. shouldnt die from hitting platform
	pass
#	hide()  # Player disappears after being hit.
#	emit_signal("hit")
#	$CollisionShape2D.set_deferred("disabled", true)

func die():
	hide()
#	emit_signal("hit")
	$CollisionShape2D.set_deferred("disabled", true)
	
# start initializes the player by setting position, making sure its visible and
# all necessary components is enabled
func start(pos):
	position = pos
	show()
	$CollisionShape2D.disabled = false
