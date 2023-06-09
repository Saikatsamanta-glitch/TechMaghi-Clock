console.log('Hello world!');
// how to take user input
// variable: starting with special characters, js case sensetive
// a= prompt("Tell me your name")
// console.log(a);

b = "javascript is cool";
console.log(b);

c = false
console.log(typeof(c));

// Arithematic operator: + , - , * , / , % {remaining}

x = 12;
y = 2;
console.log(x+y);
console.log(x-y);
console.log(x%y); 

// Logical operator: and && or || not !
console.log(!true);

// Comparison operator:  > < >= <= != !== == ===
console.log(12==="12");
// == value ✅ 12 == "12" datatype ❌
//=== value ✅ 12 == "12" datatype ✅

// Ternary operator
// condition ? true : false

12 > 11 ? console.log("number is greater") : console.log("lesser");


// Conditional statement
mark = 21;
if(mark > 90){
    console.log("Firefox cycle");
}
else if(mark > 60){
    console.log("Iphone");
}
else{
    console.log("i will study hard");
}

// array: collection of data can be of different datatype
arr  = [12,23,45,"fox", true ]
//      0   1  2   3     4
// add two numbers from list/array which gives you total 57 using index's
// console.log(arr[2] + arr[0]);
// console.log(typeof(arr));

// loops in all programming 

// for loop
/*
 
for(start, condition<end>, inc/dec ){

}

*/



for( i =0 ; i <=4; i++  ){
    console.log(arr[i]);
}

for ( i of arr){
    console.log(i);
}
// while: infinite condition and then starts the problem

// function
function xyz(){
    console.log("I am xyz function");
}
xyz()


function adding( a,b ){
    return a+b
}
z= adding(12,11)
console.log(z);
adding(1,2)


arr = [12,11,3,56,32,87]
// print all even numbers
for( j of arr ){
    if(j%2==0){
        console.log(j);
    }
}

// print only string
arr = [ 12,342,"rex","max","jungle",false,"trekking" ];
for( i of arr){
    if(typeof(i) == "string"){
        console.log(i);
    }
}

