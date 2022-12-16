let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);

console.log(`Сгенерированы числы a:${a} и b:${b}`);

while (a != 0 && b !=0) {
    if (a > b) {
        a = a %b;
    } else {
        b = b % a;
    }
}

console.log(`НОД равен: ${a+b}`);
