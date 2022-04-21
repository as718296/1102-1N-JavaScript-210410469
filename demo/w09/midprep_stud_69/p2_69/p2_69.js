const btnC = document.querySelector('#btn-c');
const btnF = document.querySelector('#btn-f');
const number =document.querySelector('#input-number');
const currentCalculation = document.querySelector('#current-calculation');

const get =()=>{
    return parseFloat (number.value);
}

const c2f =()=>{
    const enter =get();
    result =(enter*9/5+32).toFixed(2);
    currentCalculation.textContent =`${enter}C=${result}F`
}
const f2c =()=>{
    const enterF =get();
    result =((enterF-32)/9*5).toFixed(2);
    currentCalculation.textContent =`${enterF}F=${result}C`
}
btnC.addEventListener('click',c2f);
btnF.addEventListener('click',f2c);