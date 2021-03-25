// import functions and grab DOM elements
import { add, sub, multiply, divide, setup } from './calculator.js';

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
    }
];

for (let i = 0; i < calcs.length; i++) {
    const op = calcs[i];
    setup(op.id1, op.id2, op.button, op.output, op.oper);    
}

// setup('first-add', 'second-add', 'equal-add', 'sum', add);
// setup('first-sub', 'second-sub', 'equal-minus', 'difference', sub);
// setup('first-mult', 'second-mult', 'equal-product', 'product', multiply);
// setup('first-div', 'second-div', 'equal-divide', 'quotient', divide);