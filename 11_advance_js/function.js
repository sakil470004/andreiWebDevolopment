const first = () => {
    const greet = 'hi';
    const second = () => {
        const name = "bobly";
        alert(greet);
    }
    return second;
}

const newfunc = first();
newfunc();

//currying
const multipy = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multipyBy5 = curriedMultiply(5);
// compose 
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num * 5;
const sum2 = (num) => num /2;
compose(sum,sum2)(6);

//avodiding side effects, functional purity

var a=1;
function b(){//it denay the functional purity
    a=2
}