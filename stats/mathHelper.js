export function choose(n, k) {
    return (factorial(n)) / (factorial(k) * factorial(n-k));
}

function factorial(n) {
    let total = 1 ;
    for(let i = 1; i <= n; i ++) {
        total *= i;
    }
    return total;
}