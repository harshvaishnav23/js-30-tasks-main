let cl = console.log;

const calciBtn = document.getElementById('calciBtn')
const numOne = document.getElementById('numOne')
const numTwo = document.getElementById('numTwo')

const oncalciBtn = () =>{
    let numOneVal = parseInt(numOne.value);
    let numTwoVal = parseInt(numTwo.value);

    cl(`Addition of ${numOneVal} and ${numTwoVal} is ${numOneVal + numTwoVal}`)
    cl(`Substraction of ${numOneVal} and ${numTwoVal} is ${numOneVal - numTwoVal}`)
    cl(`Multiplication of ${numOneVal} and ${numTwoVal} is ${numOneVal * numTwoVal}`)
    cl(`Dividation of ${numOneVal} and ${numTwoVal} is ${numOneVal / numTwoVal}`)
}


calciBtn.addEventListener('click', oncalciBtn)