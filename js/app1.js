let cl = console.log;

const inputNum = document.getElementById('inputNum')
const btn = document.getElementById('btn')


const onBtnClick = (eve) =>{
    let num = inputNum.value;
    cl(num);
    eve.target.reset()
    if(num % 1 != 0 || num == 0){
        alert('Please enter whole number')
    }else if(num % 2 == 0){
        alert(`${num} is even Number`)
    }else{
        alert(`${num} is odd Number`)
    }
   
}



btn.addEventListener('click', onBtnClick)