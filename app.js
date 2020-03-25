let numbers = [1,2,3,4,5];

// 2

let last_number = numbers.pop();
console.log(last_number);


function sumInput() {
	let nums = [3,2,4,5];

	let sum = 0;
	for (let number of nums) {
		sum+=number;
	}
	return sum;
}
console.log(sumInput() );

// 3

let numberMax=[4,5,3,2,6];
console.log(Math.max(...numberMax));

// 4

let numberMin=[4,5,3,2,6];
console.log(Math.min(...numberMin));
