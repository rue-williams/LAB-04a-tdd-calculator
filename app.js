// import functions and grab DOM elements
import { add, sub, multiply, divide, toNumber } from './calculator.js';

// initialize state
const firstAdd = document.getElementById('first-add');
const secondAdd = document.getElementById('second-add');
const addButton = document.getElementById('equal-add');
const sumOutput = document.getElementById('sum');

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    sumOutput.textContent = add(toNumber(firstAdd), toNumber(secondAdd));
});

// initialize state
const firstSub = document.getElementById('first-sub');
const secondSub = document.getElementById('second-sub');
const subButton = document.getElementById('equal-minus');
const differenceOutput = document.getElementById('difference');

// set event listeners to update state and DOM
subButton.addEventListener('click', () => {
    differenceOutput.textContent = add(toNumber(firstSub), toNumber(secondSub));
});

