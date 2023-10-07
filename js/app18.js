const cl = console.log;

const inputNum = document.getElementById('inputNum')
const btn = document.getElementById('btn')



const onBtnClick =() => {
    let numVal = inputNum.value;
    cl(numVal)

    if(numVal > 50 && numVal < 100){
        alert(`${numVal} is between 50 and 100`)
    }else{
        alert(`${numVal} is not between 50 and 100`)
    }
}

btn.addEventListener('click', onBtnClick)

