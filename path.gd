extends Path2D

onready var follow = get_node("follow")

func _ready():
	follow.set_loop(false)
	
func start():
	follow.set_offset(0)
	set_process(true)

func _process(delta):
	follow.set_offset(follow.get_offset() + 350 * delta)
	# should we stop it at some point?
	
