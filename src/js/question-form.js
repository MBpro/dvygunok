
const inputTheme = document.querySelector('#theme');

if (inputTheme.value === '') {
    inputTheme.classList.remove('validate');
}

function AddClassInputTheme(){
     
    if (inputTheme.value !== '' && !inputTheme.classList.contains('validate')) {
        inputTheme.classList.add('validate');
    }else{
        inputTheme.classList.remove('validate');
    }
}

inputTheme.addEventListener('blur',  AddClassInputTheme);




