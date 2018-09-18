// isEven

function isEven(x) {
// 	// if even return true, else return false.
	return x % 2 === 0
// }

// factorial problem set

function factorial(num) {
	// define a result variable
	let result = 1;
	// calculate factorial and store value in result
	for(let i = 2; i <= num; i++){
		result *= i;}
	// return result
	return result;
}

// convert kebabToSnake()
function strReplace(myStr){
	// replace all "-" with "_"
        let newStr = myStr.replace(/-/g, "_"); 

        // return newStr
        return newStr;
    }