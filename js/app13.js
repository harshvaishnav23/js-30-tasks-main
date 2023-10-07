const cl = console.log;

const decBtn = document.getElementById('decBtn')
const incBtn = document.getElementById('incBtn')
const count = document.getElementById('count')



const onIncBtn = () =>{
    count.innerHTML = (parseInt(count.innerHTML)) + 1
}

const onDecBtn = () =>{
    count.innerHTML = (parseInt(count.innerHTML)) - 1
}



incBtn.addEventListener('click', onIncBtn)
decBtn.addEventListener('click', onDecBtn)





















