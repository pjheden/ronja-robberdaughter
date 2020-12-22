extends KinematicBody2D

signal hit

export var walkspeed = 350 # pixels/sec
export var jumpspeed = 2000
export var gravityscale = 200

var screen_size
var vel = Vector2()
var dir = Vector2()

func _ready():
	screen_size = get_viewport_rect().size
	$AnimatedSprite.play()
	

func process_input():
	dir = Vector2()
	if Input.is_action_pressed("ui_right"):
		dir.x += 1
	if Input.is_action_pressed("ui_left"):
		dir.x -= 1
	if Input.is_action_just_pressed("jump"):
		dir.y -= 1
	return dir

func process_movement(delta):
#	if dir.length() <= 0:
#		return vel
	vel = dir.normalized()
	vel.x *= walkspeed
	vel.y *= jumpspeed
	vel.y += gravityscale
	var motion = vel * delta
	move_and_slide(motion)
	
func process_animation():
	if vel.x != 0:
		$AnimatedSprite.animation = "walk"
		$AnimatedSprite.flip_v = false
		# See the note below about boolean assignment
		$AnimatedSprite.flip_h = vel.x < 0
	elif vel.y != 0:
		$AnimatedSprite.animation = "up"
#		$AnimatedSprite.flip_v = vel.y > 0
	
func _process(delta):
	process_animation()
	
func _physics_process(delta):
	process_input()
	process_movement(delta)
	
func _on_Player_body_entered(body):
#	TODO: we need to disguish between what we enter, ie. shouldnt die from hitting platform
	pass
#	hide()  # Player disappears after being hit.
#	emit_signal("hit")
#	$CollisionShape2D.set_deferred("disabled", true)

# start initializes the player by setting position, making sure its visible and
# all necessary components is enabled
func start(pos):
	position = pos
	show()
	$CollisionShape2D.disabled = false
