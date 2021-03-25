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

export function power(x, y) {
    return x ** y;
}

export function toNumber(el) {
    if (el.value) {
        return Number(el.value);
    }
    return 0;
}