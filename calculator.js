var buttonAdd = document.querySelector("#add");
var buttonSubtract = document.querySelector("#subtract");
var buttonDivide = document.querySelector("#divide");
var buttonMultiply = document.querySelector("#multiply");
var buttonModulus = document.querySelector("#modulus");
var buttonGreaterThan = document.querySelector("#greaterthan");
var buttonLessThan = document.querySelector("#lessthan");
var form = document.querySelector("#calculatorForm");
var displayResult = document.querySelector("#displayResult");
var inputX;
var inputY;

buttonAdd.addEventListener("click", function(event){
    event.preventDefault()

    //Extract information from the inputs
    getDataFromInput()

    var result = inputX + inputY
    displayResult.innerHTML = result
})

buttonSubtract.addEventListener("click", function(event){
    event.preventDefault()

    //Extract information from the inputs
    getDataFromInput()

    var result = inputX - inputY
    displayResult.innerHTML = result
})

buttonDivide.addEventListener("click", function(event){
    event.preventDefault()

    //Extract information from the inputs
    getDataFromInput()

    var result = inputX / inputY
    displayResult.innerHTML = result
})

buttonMultiply.addEventListener("click", function(event){
    event.preventDefault()

    //Extract information from the inputs
    getDataFromInput()

    var result = inputX * inputY
    displayResult.innerHTML = result
})

buttonModulus.addEventListener("click", function(event){
    event.preventDefault()

    //Extract information from the inputs
    getDataFromInput()

    var result = inputX % inputY
    displayResult.innerHTML = result
})

buttonGreaterThan.addEventListener("click", function(event){
    event.preventDefault()

    //Extract information from the inputs
    getDataFromInput()

    if (inputX >= inputY) {
        var result = 1 
    } else {
        var result = 0
    }
    displayResult.innerHTML = result
})

buttonLessThan.addEventListener("click", function(event){
    event.preventDefault()

    //Extract information from the inputs
    getDataFromInput()

    if (inputX <= inputY) {
        var result = 1 
    } else {
        var result = 0
    }
    displayResult.innerHTML = result
})


function getDataFromInput (){
    inputX = Number(document.getElementById("inputX").value)
    inputY = Number(document.getElementById("inputY").value)
}