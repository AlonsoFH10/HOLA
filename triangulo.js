let n1 = 10;
let n2 = 5;
let n = '//';
let res;
switch (n) {
    case '+':
        res = n1 + n2;
        break;
    case '-':
        res = n1 - n2;
        break;
    case '*':
        res = n1 * n2;
        break;
    case '/':
        if (n2 !== 0) {
            res = n1 / n2;
        } else {
            res = 'Error: División por cero';
        }
        break;
    default:
        res = 'Syntax error';
        break;
}

console.log(res);
