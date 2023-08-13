const counterValueElement = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action = "decrement"]');
const incrementButton = document.querySelector('[data-action = "increment"]');

let counterValue = 0;

function updateCounterValue() {
    counterValueElement.textContent = counterValue;
}

function incrementCounter() {
   counterValue += 1;
    updateCounterValue();
}

function decrementCounter() {
    counterValue -= 1;
    updateCounterValue();
}

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);

updateCounterValue();