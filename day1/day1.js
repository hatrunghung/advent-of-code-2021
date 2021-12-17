const fs = require('fs')

function countIncrease(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
        count++
    }
  }

  return count;
}

function getThreeSum(a, b, c) {
  return a + b + c
}

function issueArrOfThreeSum(arr) {
  let finalArr = []

  for (let i = 0; i < arr.length - 2; i++) {
    finalArr.push(getThreeSum(arr[i], arr[i + 1], arr[i + 2]))
  }

  return finalArr
}

fs.readFile('day1input.txt', 'utf-8', (err, data) => {
	if (err) {
		console.error(err)
	}

	data = data.split('\n').map(s => parseInt(s))
	console.log(data)
	console.log(data.length)

	let count = countIncrease(data)
	console.log('day 1 part 1 answer:', count)

	let finalArr = issueArrOfThreeSum(data)
	let count2 = countIncrease(finalArr)

	console.log('day 1 part 2 answer', count2)
})