
function add(a, b){
    return a + b;
}
function substract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

switch(operator){
    case "+" : console.log(add(nr1, nr2));
    break;
    case "-" : console.log(substract(nr1, nr2));
    break;
    case "*" : console.log(multiply(nr1, nr2));
    break;
    case "/" : console.log(divide(nr1, nr2));
    break;
    default : console.log("invalid operator");
}



