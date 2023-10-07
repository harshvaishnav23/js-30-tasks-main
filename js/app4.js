let cl = console.log;

const btnShow = document.getElementById('btn')
const fnumControl = document.getElementById('fnum')
const SnumControl = document.getElementById('Snum')
const TnumControl = document.getElementById('Tnum')



const onBtnShow = () =>{
    let firstVal = fnumControl.value;
    let secondVal = SnumControl.value;
    let thirdVal = TnumControl.value;

    alert(`Highest Number : ${Math.max(firstVal, secondVal, thirdVal)} or Lowest Number : ${Math.min(firstVal, secondVal, thirdVal)}`)
}


btnShow.addEventListener('click', onBtnShow)