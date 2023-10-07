const cl = console.log;

let strArr = ['ram', 'harsh', 'kalyani', 'hizda']



let redArr = strArr.reduce((acc,cv) => {
    return acc.length > cv.length ? acc : cv
})
cl(redArr)

