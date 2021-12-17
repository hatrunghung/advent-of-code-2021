const fs = require('fs')

const FORWARD = 'forward'
const DOWN = 'down'

function getMultiplyCoor(arr) {
	let horizontalCoor = 0;
	let verticalCoor = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i][0] === FORWARD) {
			horizontalCoor += arr[i][1]
		} else if (arr[i][0] === DOWN) {
			verticalCoor += arr[i][1]
		} else {
			verticalCoor -= arr[i][1]
		}
	}

	return horizontalCoor * verticalCoor
}

function getMultiplyCoorPartTwo(arr) {
	let horizontalCoor = 0;
	let aim = 0;
	let depth = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i][0] === FORWARD) {
			horizontalCoor += arr[i][1]
			depth += (arr[i][1] * aim)
		} else if (arr[i][0] === DOWN) {
			aim += arr[i][1]
		} else {
			aim -= arr[i][1]
		}
	}

	return horizontalCoor * depth
}

fs.readFile('day2input.txt', 'utf-8', (err, data) => {
	if (err) {
		console.log(err)
	}

	data = data.split('\n').map(instruction => {
		instruction = instruction.split(' ')
		return [instruction[0], parseInt(instruction[1])]
	})

	console.log(data)

	let result1 = getMultiplyCoor(data)
	console.log('day 2 part 1 answer:', result1);

	let result2 = getMultiplyCoorPartTwo(data)
	console.log('day 2 part 2 answer:', result2);
})