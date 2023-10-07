const cl = console.log;

const upperStr = (str) => {
    let uprCaseStr = str.toUpperCase()
    cl(uprCaseStr)

    let capVal = ''
    let lwrVal = ''

    for (const char of str) {
        cl(char)
        if(uprCaseStr.includes(char)){
            capVal += char
        }else{
            lwrVal += char
        }
    }

    cl(capVal)
    cl(lwrVal)
    return `${capVal}${lwrVal}`

}

cl((upperStr('bouTYl')))