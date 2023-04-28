const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', onlnputBlur);

function onlnputBlur(event) {
    const total = event.currentTarget.value.length
    if (Number(inputEl.dataset.length)!==total) {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
       
    } else {
        inputEl.classList.remove('invalid');
       inputEl.classList.add('valid'); 
    }
    
}

