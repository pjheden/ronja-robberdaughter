extends Node2D
signal hit

# called when a arrow hits the target
func bullet_hit(bd, gt):
	print("I am a target and i got hit")
	emit_signal("hit")
	queue_free()
