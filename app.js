// import functions and grab DOM elements
import { add, sub, multiply, divide, toNumber, power, convertTemp } from './calculator.js';

const calcs = [
    {
        id1: 'first-add',
        id2:  'second-add',
        button:  'equal-add',
        output: 'sum',
        oper: add
    },
    {
        id1: 'first-sub',
        id2:  'second-sub',
        button:  'equal-minus',
        output: 'difference',
        oper: sub
    },
    {
        id1: 'first-mult',
        id2:  'second-mult',
        button:  'equal-product',
        output: 'product',
        oper: multiply
    },
    {
        id1: 'first-div',
        id2:  'second-div',
        button:  'equal-divide',
        output: 'quotient',
        oper: divide
    },
    {
        id1: 'first-pow',
        id2:  'second-pow',
        button:  'equal-power',
        output: 'expo',
        oper: power
    }
];
// {
//     id1: 'temp',
//     id2:  'symbol',
//     button:  'equal-convert',
//     output: 'outta',
//     oper: convertTemp
// }
    
function setup(id1, id2, button, output, oper) {
    // initialize state
    const num1 = document.getElementById(id1);
    const num2 = document.getElementById(id2);
    const action = document.getElementById(button);
    const out = document.getElementById(output);
    // set event listeners to update state and DOM
    action.addEventListener('click', () => {
        out.textContent = oper(toNumber(num1), toNumber(num2));
    });
}

for (let i = 0; i < calcs.length; i++) {
    const op = calcs[i];
    setup(op.id1, op.id2, op.button, op.output, op.oper);    
}

// setup('first-add', 'second-add', 'equal-add', 'sum', add);
// setup('first-sub', 'second-sub', 'equal-minus', 'difference', sub);
// setup('first-mult', 'second-mult', 'equal-product', 'product', multiply);
// setup('first-div', 'second-div', 'equal-divide', 'quotient', divide);