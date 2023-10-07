let cl = console.log;

const inputCap = document.getElementById('inputCap')
const btn = document.getElementById('btn')

const onBtnClick = () =>{
    let inputVal = inputCap.value;
    alert(`${inputVal} in capitalize : ${inputVal.toUpperCase()}`)
}

btn.addEventListener('click', onBtnClick)
