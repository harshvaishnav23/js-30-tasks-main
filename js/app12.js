const cl = console.log;

const inputNum1 = document.getElementById('inputNum1')
const inputNum2 = document.getElementById('inputNum2')
const inputNum3 = document.getElementById('inputNum3')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')

const onMinToSec = () =>{
    let numVal1 = inputNum1.value * 60;
    cl(numVal1)
    inputNum1.value = numVal1
}

const onHourToMin = () =>{
    let numVal2 = inputNum2.value;
    inputNum2.value = numVal2 * 60;
}

const onSecToMin = () =>{
    let numVal3 = inputNum3.value;
    inputNum3.value = numVal3 / 60;
}

btn1.addEventListener('click', onMinToSec)
btn2.addEventListener('click', onHourToMin)
btn3.addEventListener('click', onSecToMin)