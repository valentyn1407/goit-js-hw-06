const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('h1 > #name-output')
}

refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value || 'Anonimus'
}

