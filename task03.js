const word = 'тестовое слово';

const reverseString = (string) => {
    let newStr = '';
    let lgth = string.length;

    while (lgth>0) {
        newStr += string.substring(lgth-1, lgth);
        lgth--;
    }
    return newStr;
}

console.log(reverseString(word));

