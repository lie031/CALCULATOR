const numbersButtons = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelectorAll('[data-operation]');
const equalButton= document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const display = document.querySelector('[data-display]');
const display2= document.querySelector('[data-display2]')

let currentNumber = '';
let operator = '';
let previusNumber='';

add=(num1,num2)=> num1+num2;
subtract=(num1,num2)=> num1-num2;
multiply=(num1,num2)=> num1*num2;
divide=(num1,num2)=>num1/num2;

numbersButtons.forEach(button => button.addEventListener('click',(e)=>displayNumber(e.target.textContent)))
operationsButtons.forEach(button => button.addEventListener('click',(e)=>displayOperator(e.target.textContent)))
clearButton.addEventListener('click',clear)
equalButton.addEventListener('click',()=>{
    if(currentNumber != '' && previusNumber != ""){
        calculate();
    }
});



function displayNumber(num){
    currentNumber += num;
    display.textContent = currentNumber;
}

function displayOperator(op){
    if(currentNumber !== "" && previusNumber !== "" ){
        calculate();
        previusNumber = currentNumber;
        operator = op.textContent;
        display2.textContent=previusNumber+operator
        display.textContent="";
    }
    operator =  op;
    previusNumber = currentNumber;
    display2.textContent = previusNumber + operator;
    currentNumber = "";
    display.textContent = "";
}

function calculate(){
    previusNumber = Number(previusNumber);
    currentNumber = Number(currentNumber);
    if(operator == '+'){
        currentNumber = add(previusNumber,currentNumber);
    }
    else if(operator == '-'){
        currentNumber = subtract(previusNumber,currentNumber);
    }
    else if(operator == '/'){
        if(currentNumber==0){
            currentNumber = "ERROR";
            display2.textContent='';
            display.textContent=currentNumber;
            operator= '';
            return  
        }
        currentNumber = divide(previusNumber,currentNumber);
    }
    else if(operator == '*'){
        currentNumber = multiply(previusNumber,currentNumber);
    }
    currentNumber = currentNumber.toString();
    previusNumber = "";
    operator = "";
    display2.textContent='';
    display.textContent=currentNumber;

}

function clear(){
    currentNumber ="";
    previusNumber='';
    operator='';
    display.textContent = '';
    display2.textContent = '';
}