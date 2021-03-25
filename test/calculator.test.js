// IMPORT MODULES under test here:
import { add, sub, multiply, toNumber, divide, power, convertTemp } from '../calculator.js';

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

test('sub function test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 22;
    const y = 12;
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = sub(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiply function test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 10;
    const y = 5;
    const expected = 50;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divide function test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 100;
    const y = 4;
    const expected = 25;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('0 divided by 0 returns 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 0;
    const y = 0;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('power function test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 2;
    const expected = 16;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = power(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('convertTemp function test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 0;
    const y = 'c';
    const expected = 32;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = convertTemp(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Return element value as number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 7;
    const input = document.createElement('input');
    input.value = expected;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = toNumber(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Empty string returns 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    const input = document.createElement('input');
    input.value = '';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = toNumber(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
