const firstNumber = prompt('Введите первое число');
const secondNumber = prompt('Введите второе число');

const minNumber = firstNumber < secondNumber ? firstNumber : secondNumber; 
console.log(`Минимальное число: ${minNumber}`);