let cl = console.log;

const inputNum = document.getElementById('inputNum')
const btn = document.getElementById('btn')

const onBtnClick = () =>{
    let number = parseInt(inputNum.value)
    alert(`Next Five Number are ${number+1}, ${number+2}, ${number+3}, ${number+4} and ${number+5}`)
}


btn.addEventListener('click', onBtnClick)