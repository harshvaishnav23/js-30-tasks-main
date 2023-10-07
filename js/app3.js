let cl = console.log;

const firstNum = document.getElementById('firstNum')
const secondNum = document.getElementById('secondNum')
const btnRandom = document.getElementById('btnRandom')


btnRandom.addEventListener('click', () => {

    let firstNumVal = +firstNum.value + 1;
    let secondNumVal = +secondNum.value

    alert(Math.floor(firstNumVal +  Math.random() * (secondNumVal - firstNumVal)))
   
})

