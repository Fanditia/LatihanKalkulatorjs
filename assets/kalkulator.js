console.log('Terima Kasih');
const kalkulator = {
    displaynumber: '0',
    operator: null,
    angkaPertama: null,
    wilson: false   
};

function updateDisplay(){
    document.querySelector("#displayNumber").innerText = kalkulator.displaynumber;
}

function Clearkalkulator(){
    kalkulator.displaynumber = '0';
    kalkulator.operator = null;
    kalkulator.angkaPertama = null;
    kalkulator.wilson = false;
}

function inputDigit(digit) {
    if(kalkulator.displaynumber === '0') {
        kalkulator.displaynumber = digit;
    } else {
        kalkulator.displaynumber += digit;
    }
    
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons){
    button.addEventListener('click', function(event) {
        const target = event.target;
        if(target.classList.contains('clear')) {
            Clearkalkulator();
            updateDisplay();
            return;
        }
        if (target.classList.contains('negative')){
            inverseNumber();
            updateDisplay();
            return;
        }
        if (target.classList.contains('equals')){
            performCalculation();
            updateDisplay();
            return;
        }
        if (target.classList.contains('operator')){
            handleOperator(target.innerText);
            return;
        }
        inputDigit(target.innerText);
        updateDisplay() 
    });
}

function inverseNumber(){
    if(kalkulator.displaynumber === '0'){
        return;
    }
    kalkulator.displaynumber = kalkulator.displaynumber * -1; 
}

function handleOperator(operator){
    if(!kalkulator.wilson){
        kalkulator.operator = operator;
        kalkulator.wilson = true;
        kalkulator.angkaPertama = kalkulator.displaynumber;
        kalkulator.displaynumber = '0';
    }else {
        alert('Operator Sudah')
    }
}

function performCalculation(){
    if (kalkulator.angkaPertama == null || kalkulator.operator == null){
        alert("Masukkan Operator"); 
        return;
    }
    let result = 0;
    if (kalkulator.operator === "+"){
        result = parseInt(kalkulator.angkaPertama) + parseInt(kalkulator.displaynumber);
    }else {
        result = parseInt(kalkulator.angkaPertama) - parseInt(kalkulator.displaynumber)
    }
    kalkulator.displaynumber = result;
}