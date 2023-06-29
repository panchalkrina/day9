//using function name
function calcAddition(number1,number2){
    return number1+number2;
}
console.log(calcAddition(10,7));
//using variable
const square=function(number){
    return number*number;
};
const x = square(4);
console.log(x);

//arrow function
const a=["Hydrogen","Helium","Lithium","Beryllium"];
const a2=a.map(function(s) {
    return s.length;
})
 console.log("Noraml way",a2);
 const a3 =a.map((s)=> s.length);
 console.log("Using Arrow Function",a3);