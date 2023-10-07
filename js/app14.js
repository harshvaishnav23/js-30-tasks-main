const cl = console.log;

const showSum = document.getElementById('showSum')


const onshowSum = () =>{
    function showSuminAlert(n1, n2){
        return n1 + n2
    }
    alert(`Sum is ${showSuminAlert(5, 10)}`)
}





showSum.addEventListener('click', onshowSum)