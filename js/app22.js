const cl = console.log;

let stateArr = ['Bihar', 'Andra Pradesh', 'Maharashtra', 'Aasam', 'Zarkhand', 'Punjab', 'Uttrakhand']


let sortArr = stateArr.sort((a,b) => {
    if(a > b){
        // return a - b
        return 1
    }else{
        // return b - a
        return 0
    }
})

cl(sortArr)





