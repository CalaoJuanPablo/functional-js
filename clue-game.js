// Create an object using the bracket and dot notation that represents the characters and related data you may find in a game of Clue

var game = {}

game.murderer = '??'

game['weapons'] = [
	{ type: 'lasers', location: 'bedroom' },
	{ type: 'angry cats', location: 'livingroom' },
	{ type: 'dish soap', location: 'bathroom' }
]

game.characters = []

game.characters[0] = 'Miss Scarlet'

game.characters.push('Mr. Green')

// console.log(game)

// Destructuring

const newCharacter = { name: 'Rusty', room: 'kitchen', weapon: 'candlestick' }

const {
	name: newCharName,
	room: newCharLocation,
	weapon: newCharWeapon
} = newCharacter

game.characters.push(newCharName)
game.weapons.push({ type: newCharWeapon, location: newCharLocation })

// console.log(game)

// Looping exercise

game.suspects = [
	{
		name: 'Rusty',
		color: 'orange'
	},
	{
		name: 'Miss Scarlet',
		color: 'red'
	}
]

function loopArr(arr) {
	for (i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
}

loopArr(game.suspects)
