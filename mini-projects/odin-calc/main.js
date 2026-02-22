var tempNum = "";
var calcHistory = [];
var result = 0;
//num1, opr, num2
var operations = {
    "add" : "+",
    "subtract" : "-",
    "multiply" : "*",
    "divide" : "/",
    "equal" : "="
};


// Element nodes
var displayDiv = document.getElementById("display");
var numpadDiv = document.getElementById("numpad");
var operationsDiv = document.getElementById("operations");
var decimalButton = document.getElementById("decimal");

// -------- Utils
function clearAll(){
    tempNum = "";
    calcHistory = [];
    result = 0;
    updateDisplayValue();
}
function isAnOperation(v){
    //TODO: Damn good
    return Object.values(operations).includes(v);
}
function disableButton(element){
    element.setAttribute("disabled","true");
}
function enableButton(element){
    console.log("enabled");
    element.removeAttribute("disabled");
}

// ------ Event listeners
numpadDiv.addEventListener("click",(ev)=>{
    if( !ev.target.getAttribute("value") ){
        return;
    }
    var numValue =ev.target.getAttribute("value");
    if( numValue == "." ){
        disableButton(decimalButton);
    }
    if( calcHistory.length == 1 ){
        calcHistory = [];
        //when a result is displayed and you type new num
    }
    if( numValue == "AC" ){
        clearAll();
    } else if( numValue == "backspace" && tempNum != "" ){
        tempNum = (tempNum.length==1)? "" : tempNum.slice(0,tempNum.length-1);
    } else{
        tempNum += numValue;
    }
    updateDisplayValue();
});

operationsDiv.addEventListener("click",(ev)=>{
    if( ev.target.getAttribute("operation") && ev.target.getAttribute("operation") in operations ){
        if( tempNum == "" && isAnOperation(calcHistory[calcHistory.length-1]) ){
            return;
        }
       calcHistory.push(tempNum);
       enableButton(decimalButton);
       tempNum = "";
       calcHistory.push(operations[ev.target.getAttribute("operation")]);
       if(calcHistory.length > 3){
        result = calculate();
       }
       updateDisplayValue();
    }
});

// CALCULATIONS and Update
function updateDisplayValue(){
    var text = "";
    if( calcHistory.length == 0 && tempNum =="" ){
        text = "0";
    }else if(calcHistory.length <= 3){
        text = calcHistory.join(" ") + " " + tempNum;
    }else{
        if( calcHistory[calcHistory.length -1] == "=" ){
            text = `${result}`;
            calcHistory = [result];
            // clear all history and put result in first num in history
        }else{
            text = `${result} ${calcHistory[calcHistory.length -1]} ${tempNum}`;
        }
    }
    displayDiv.innerText = text;
}

// Utils 

function calculate(){
    var num1 = (result !=0)?result: calcHistory[calcHistory.length-4];
    var num2 = calcHistory[calcHistory.length-2];
    if( calcHistory[calcHistory.length-3] ==  operations["divide"] && num2 == 0 ){
        //Error msg
        return;
    }

    switch(calcHistory[calcHistory.length-3]){
        case operations["add"]:
            return Number(num1) + Number(num2)
        case operations["subtract"]:
            return Number(num1) - Number(num2)
        case operations["multiply"]:
            return Number(num1) * Number(num2)
        case operations["divide"]:
            return Number(num1) / Number(num2)
        default:
            return 0;
    }
}