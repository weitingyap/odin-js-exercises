const palindromes = function (string) {
    string = string.toLowerCase();

    const letters = "1234567890abcdefghijklmnopqrstuvwxyz";
    letterArr = string.split('').filter((char)=>letters.includes(char));

    reversedLetterArr = letterArr.slice(0).reverse();

    return letterArr.join('') === reversedLetterArr.join('');
};

// Do not edit below this line
module.exports = palindromes;