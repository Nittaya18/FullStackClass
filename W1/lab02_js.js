const constVariable = 30;

function testscope() {
    let letVariable = 10;
    var verVariable = 20;
    {
        let letVariable = 20;
        var varVariable = 20;
    }
    alert(varVariable)
}

//testscope();

let operator1 = 10;
let operator2 =20;
operator2 = 30;

// let greetingMessage = "Hello";
// let operator3 = 30;
// //alert(operator3 + operator1);
// if(operator2 === operator3) {
//     alert("Equal");
// } else {
//     alert("Not Equal")
// }

function greeting(message) {
    alert(message);
}

function sum(a, b) {
    let op1 = document.getElementById("op1").value;
    let op2 = document.getElementById("op2").value;

    let op1Value = parseInt(op1);
    let op2Value = parseInt(op2);

    let resultElement = document.getElementById("result");
    resultElement,innerHTML = op1Value + op2Value;
    return a + b;

}
// greeting(greetingMessage);