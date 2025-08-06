var n1=prompt("enter a number-1 :");
var n2=prompt("enter a number-2 :");
const choice=prompt("enter your operation ");
var Res;
switch(choice){
case "+": console.log("Res=",n1+n2);
break;
case "-": console.log("Res=",n1-n2);
break;
case "*": console.log("Res=",n1*n2);
break;
case "/": console.log("Res=",n1/n2);
break;
case "%": console.log("Res=",n1%n2);
break;
}