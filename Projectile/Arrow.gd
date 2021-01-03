extends Node2D

export var bullet_speed = 70
export var bullet_damage = 15

const KILL_TIMER = 4
var timer = 0

var hit_something = false

func _ready():
	$Area2D.connect("body_entered", self, "collided")


func _physics_process(delta):
	var forward_dir = transform.x
	global_translate(forward_dir * bullet_speed * delta)

	timer += delta
	if timer >= KILL_TIMER:
		queue_free()


func collided(body):
	if hit_something == false:
		if body.has_method("bullet_hit"):
			body.bullet_hit(bullet_damage, global_transform)

	hit_something = true
	queue_free()
