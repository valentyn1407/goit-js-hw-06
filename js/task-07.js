const inputSizeControl = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text')

function changeFontSize() {
    const fontSize = inputSizeControl.value + 'px';
    textElement.style.fontSize = fontSize;
}

inputSizeControl.addEventListener('input', changeFontSize);

