// import functions and grab DOM elements
import { add, sub, multiply, divide, setup } from './calculator.js';

setup('first-add', 'second-add', 'equal-add', 'sum', add);
setup('first-sub', 'second-sub', 'equal-minus', 'difference', sub);
setup('first-mult', 'second-mult', 'equal-product', 'product', multiply);
setup('first-div', 'second-div', 'equal-divide', 'quotient', divide);

