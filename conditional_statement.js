let num1 = 6
let num2 = 7
let num3 = 8
//let output

//output = num1 > num2

//console.log(output)

//if statement: us if to specify a block of code to be executed
//if a specified condition is true

if(num1 > num2 && num1 > num3){
    console.log("num1 is greater")
}
//Use else if to specify a new condition to test, if the first condition is false// 
//if & else cannot be used multiple times but else if can be used multiple times//
//if at the start and else at the end//
else if(num2 > num1 && num2 > num3){ 
    console.log("num2 is greater")
}
else{
    console.log("num3 is greater")
}
console.log("Process completed")