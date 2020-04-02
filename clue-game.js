// Create an object using the bracket and dot notation that represents the characters and related data you may find in a game of Clue

var game = {}

game.murderer = '??'

game['weapons'] = [
	{ type: 'lasers' },
	{ type: 'angry cats' },
	{ type: 'dish soap' }
]

game.characters = []

game.characters[0] = 'Miss Scarlet'

game.characters.push('Mr. Green')

console.log(game)
