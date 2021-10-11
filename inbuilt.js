var num1 = 20
var num2 = 20.5

//  to string() number as input and returns a string as output
console.log(typeof(num1.toString()))
console.log(num2.toString())

var strnum1 = "30"
var strnum2 = "30.5"
var strnum3 = "ABC"

//parseInt() string numeral as input and returns a number
console.log(typeof(strnum1))
console.log(parseInt(strnum1))
console.log(parseInt(strnum2))

//parseFloat() string numral as input and returns a floating numbers

console.log(parseFloat(strnum2))

// toFixed() taken floating number and round it off to given position

var strFloat = 70.656489
console.log(strFloat.toFixed(0))
console.log(strFloat.toFixed(2))
