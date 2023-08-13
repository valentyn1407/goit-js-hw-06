const validationInput = document.getElementById('validation-input');

function checkInputLength() {
  const requiredLength = parseInt(validationInput.getAttribute('data-length'));
  const inputValue = validationInput.value;
  
  if (inputValue.length === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
}


validationInput.addEventListener('blur', checkInputLength);