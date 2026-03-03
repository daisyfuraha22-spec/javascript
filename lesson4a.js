// functions with parameters
//parameters are values that get passed as argumnets when we invoke a function
// they help us to create a function that can be reusable through out a program


function greeting(name){
    console.log("hello",name,"how have you been")
}


greeting("Furaha")
greeting("john,james")
console.log("---------------")
//below is a funcion with parameters to calculate the sum of two numbers
function addition(number1,number2){
    sum=number1+number2
    console.log("the sum of the numbers is:",sum)
}
addition(45,60)
addition(90,50)
console.log("-------------")
//calculate the area of triangle whose base is is 20 cm and whose height is 12cm

function area(base,height){
    result=base*height/2;
    console.log("the area is",result,"cm²")
  }
  area(12,20)
  area(7,24)
console.log("-------------")
//fin the simple intrest given the principle as fifty thousand rate 5% and time as 8years
function simpleInterest(principal, rate, time) {
let si = (principal * rate * time) / 100;
console.log("The Simple Interest is:", si);
return si;
}

simpleInterest(50000, 5, 5);
