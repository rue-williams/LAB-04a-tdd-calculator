// IMPORT MODULES under test here:
import { add } from '../calculator.js';

const test = QUnit.test;

test('add function test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 10;
    const y = 3;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
