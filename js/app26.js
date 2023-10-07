const cl = console.log;

const inputstr = document.getElementById('inputstr')
const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    let inputVal = inputstr.value.split('').shift();
    cl(inputVal)


    let updatedVal = inputstr.value + inputVal 
    cl(updatedVal)

}
)










