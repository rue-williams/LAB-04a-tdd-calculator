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
// initialize state
const firstMult = document.getElementById('first-mult');
const secondMult = document.getElementById('second-mult');
const productButton = document.getElementById('equal-product');
const productOutput = document.getElementById('product');

// set event listeners to update state and DOM
productButton.addEventListener('click', () => {
    productOutput.textContent = add(toNumber(firstMult), toNumber(secondMult));
});
// initialize state
const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const divButton = document.getElementById('equal-divide');
const quotientOutput = document.getElementById('quotient');

// set event listeners to update state and DOM
divButton.addEventListener('click', () => {
    quotientOutput.textContent = add(toNumber(firstDiv), toNumber(secondDiv));
});

