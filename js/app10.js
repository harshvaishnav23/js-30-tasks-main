let cl = console.log;

const copyBtn = document.getElementById('copyBtn')
const pasteBtn = document.getElementById('pasteBtn')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

let copyVal = ''

const onCopyText = () =>{
     copyVal = input1.value;
}

const onPasteText = () =>{
    input2.value = copyVal;
}

copyBtn.addEventListener('click', onCopyText)
pasteBtn.addEventListener('click', onPasteText)