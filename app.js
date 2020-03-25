let numbers = [1,2,3,4,5];

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