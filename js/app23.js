const cl = console.log;


function checkNum(num1 ,num2){

    if(num1 === 35 || num2 === 35 || (num1 + num2 == 35)){
        return true
}else{
    return false
}
}
cl(checkNum(20, 15))