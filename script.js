const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');


let firstValue = "";
let isFirstValue = false;
let secoundValue = "";
let isSecoundValue = false;
let sign = "";
let resultValue = "0";

for(let i = 0; i < numbers.length ; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(firstValue === false){
            getFirstValue(atr);
        }
        if(isSecoundValue == false){
            getSecoundValue(atr);
        }
    })
}

function getFirstValue(el){
    resultValue.innerHTML = "";
    firstValue += el;
    resultValue.innerHTML = firstvalue;
    firstValue = +firstValue;
}


function getSecoundValue(el){
    if(firstValue != "" && sign !=""){
        secoundValue += el;
        resultValue.innerHTML = secoundValue;
        secoundValue = +secoundValue;
    }
}

function getSign(){
    for(let i = 0; i< signs.length; i++){
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}

getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign === "+") {
        resultValue = firstValue + secoundValue;
    } else if(sign === "-") {
        resultValue = firstValue - secoundValue;
    } else if(sign === "x") {
        resultValue = firstValue * secoundValue;
    } else if(sign === "/") {
        resultValue = firstValue / secoundValue;
    }

    result.innerHTML = resultValue;
    firstValue = resultValue;
    secoundValue = "";

    checkResultLength();

})

function checkResultLength(){
    resultValue = JSON.stringify(resultValue);

    if(resultValue.length >= 0){
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = -firstValue;
        firstValue = resultValue;
    }

    if(firstValue !="" && secoundValue !="" && sgin !=""){
        resultValue = -resultValue;
    }


    result.innerHTML = resultValue;
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }

    if(firstValue !="" && secoundValue !="" && sgin !=""){
        resultValue = resultValue / 100;
    }


    result.innerHTML = resultValue;
})

clear.addEventListener('click', () => {
    result.innerHTML = 0;
    isFirstValue = flase;
    secoundValue = "";
    isSecoundValue = false;
    sign = "";
    resultValue = 0;
})