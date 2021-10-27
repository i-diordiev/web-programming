var leftOp = 0;
var rightOp = 0;
var result = 0;

var operation = "";

function loadNumber(n){
    const input = document.getElementById('text');
    input.innerText += n;
}

function erase(){
    const input = document.getElementById('text');
    input.innerText = 
        input.innerText.substring(0, input.innerText.length-1);
}

function sum(){
    const input = document.getElementById('text');
    leftOp = parseInt(input.innerText);
    input.innerText = "";
    operation = "+";
}

function substract(){
    const input = document.getElementById('text');
    leftOp = parseInt(input.innerText);
    input.innerText = "";
    operation = "-";
}

function multiply(){
    const input = document.getElementById('text');
    leftOp = parseInt(input.innerText);
    input.innerText = "";
    operation = "*";
}

function divide(){
    const input = document.getElementById('text');
    leftOp = parseInt(input.innerText);
    input.innerText = "";
    operation = "/";
}

function squareRoot(){
    const input = document.getElementById('text');
    leftOp = parseInt(input.innerText);
    input.innerText = Math.sqrt(leftOp);
}

function mod(){
    const input = document.getElementById('text');
    leftOp = parseInt(input.innerText);
    input.innerText = "";
    operation = "%";
}

function pow(){
    const input = document.getElementById('text');
    leftOp = parseInt(input.innerText);
    input.innerText = "";
    operation = "^";
}

function res(){
    const input = document.getElementById('text');
    if(operation != "=")
        rightOp = parseInt(input.innerText);

    input.innerText = "";

    switch (operation) {
        case "+":
            result = leftOp + rightOp;
            leftOp = result;
            operation = "=";
            break;
        case '-':
            result = leftOp - rightOp;
            leftOp = result;
            operation = "=";
            break;
        case '*':
            result = leftOp * rightOp;
            leftOp = result;
            operation = "=";
            break;
        case '/':
            result = leftOp / rightOp;
            leftOp = result;
            operation = "=";
            break;
        case '%':
            result = leftOp % rightOp;
            leftOp = result;
            operation = "=";
            break;
        case '^':
            result = Math.pow(leftOp, rightOp);
            leftOp = result;
            operation = "=";
            break;
    }

    input.innerText = result;
}