extends Area2D
signal trigger

func triggered(body):
	if body.is_in_group("Player"):
		emit_signal("trigger")
		queue_free()
