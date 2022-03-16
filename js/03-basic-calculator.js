const x = parseFloat(prompt('Enter first number: '));
const y = parseFloat(prompt('Enter second number: '));
const operator = prompt('Enter operator ( either +, -, * or / ): ');
var z;
function calculator( x, y ) {
    if (operator == '+') {
    let z = x + y;
    return z;
    }
        else if (operator == '-') {
            let z = x - y;
            return z;
        }
            else if (operator == '*') {
                let z = x * y;
                return z;
            }
        else {
            let z = x / y;
            return z;
        }
}
console.log(calculator(x, y));