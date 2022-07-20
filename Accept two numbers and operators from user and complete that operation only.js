var num1 = parseInt(prompt("Enter the number1"));
var num2 = parseInt(prompt("Enter the number2"));
var operator = prompt("Enter  the operator");
switch (operator) {
    case '+':
        console.log("Addition of numbers", num1 + num2);
        break;
    case '-':
        console.log("Subtraction of numbers", num1 - num2);
        break;
    case '*' :
        console.log("Multiplication of numbers", num1 * num2);
        break;
    case '/' :
        console.log("Division of a numbers",num1/num2);
        break;
    }
    