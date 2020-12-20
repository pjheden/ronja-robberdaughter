extends Area2D

export var speed = 400 # pixels/sec
var screen_size

func _ready():
	screen_size = get_viewport_rect().size

func process_input():
	var dir = Vector2()
	if Input.is_action_pressed("ui_right"):
		dir.x += 1
	if Input.is_action_pressed("ui_left"):
		dir.x -= 1
	if Input.is_action_pressed("ui_up"):
		# jump
		pass
	return dir

func process_movement(delta, dir):
	var velocity = Vector2()
	if dir.length() <= 0:
		return velocity
	velocity = dir.normalized() * speed
	
	# Update player pos
	position += velocity * delta
	position.x = clamp(position.x, 0, screen_size.x)
	position.y = clamp(position.y, 0, screen_size.y)
	return velocity
	
func process_animation(dir, velocity):
	if dir.length() <= 0:
		$AnimatedSprite.play()
	else:
		$AnimatedSprite.stop()
				
	if velocity.x != 0:
		$AnimatedSprite.animation = "walk"
		$AnimatedSprite.flip_v = false
		# See the note below about boolean assignment
		$AnimatedSprite.flip_h = velocity.x < 0
	elif velocity.y != 0:
		$AnimatedSprite.animation = "up"
		$AnimatedSprite.flip_v = velocity.y > 0
	
func _process(delta):
	var dir = process_input()
	var vel = process_movement(delta, dir)
	process_animation(dir, vel)
	
