extends Node

func _ready():
	new_game()


func game_over():
	pass # Replace with function body.

func new_game():
	$Player.start($StartPosition.position)
