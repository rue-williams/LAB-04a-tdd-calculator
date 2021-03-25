export function add(x, y) {
    return x + y;
}

export function sub(x, y) {
    return x - y;
}

export function multiply(x, y) {
    return x * y;
}

export function divide(x, y) {
    if (x === 0 && y === 0) {
        return 0;
    }
    return x / y;
}

export function toNumber(el) {
    if (el.value) {
        return Number(el.value);
    }
    return 0;
}

export function setup(id1, id2, button, output, oper) {
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