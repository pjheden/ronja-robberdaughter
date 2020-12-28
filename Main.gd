extends Node

func _ready():
	new_game()


func game_over():
	# Let's just restart when we die
	$Player.start($StartPosition.position)

func new_game():
	$Player.start($StartPosition.position)
