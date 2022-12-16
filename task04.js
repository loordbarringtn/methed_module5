const calculate = (totalSum, goodsQuantity, promocode) => {
    if (goodsQuantity > 10) {
        totalSum *= 0.97;
    } else if (totalSum > 30000) {
        totalSum = (totalSum - 30000) * 0.85 + 30000;
    } else if (promocode === 'METHED') {
        totalSum *= 0.9;
    } else if (promocode === 'G3H2Z1' && totalSum > 2000) {
        totalSum -= 500;
    }
    return totalSum;
}


console.log(calculate(10000, 12, 'no'));
console.log(calculate(40000, 9, 'no'));
console.log(calculate(20000, 9, 'METHED'));
console.log(calculate(20000, 9, 'G3H2Z1'));
console.log(calculate(200000, 11, 'METHED'));

