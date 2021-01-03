extends Node2D

export var idle_duration = 1.0
export var move_to = Vector2.RIGHT * 192
export var speed = 3.0
export var auto_start = true

var follow = Vector2.ZERO

onready var platform = $Platform
onready var tween = $Tween


func _ready():
	if auto_start:
		init_tween()
	
func init_tween():
	var duration = move_to.length() / float(speed)
	tween.interpolate_property(self, "follow", Vector2.ZERO, move_to, duration, Tween.TRANS_LINEAR, Tween.EASE_IN_OUT, idle_duration)
	tween.interpolate_property(self, "follow", move_to, Vector2.ZERO, duration, Tween.TRANS_LINEAR, Tween.EASE_IN_OUT, duration * idle_duration * 2)
	tween.start()	

func _physics_process(delta):
	platform.position = platform.position.linear_interpolate(follow, 0.075)

func start():
	init_tween()
