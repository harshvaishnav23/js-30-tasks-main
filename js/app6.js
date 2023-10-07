let cl = console.log;

const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const birthYear = document.getElementById('birthYear');
const btnAge = document.getElementById('btn')

const onBtnAge = () =>{
    let inputYr = birthYear.value;
    cl(inputYr)
    let crYear = new Date().getFullYear();
    cl(crYear)
    alert(`Your age is : ${crYear - inputYr}`)
}


btnAge.addEventListener('click', onBtnAge)

