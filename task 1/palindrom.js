function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-zа-я0-9]/g, '');

    return cleanedStr === cleanedStr.split('').reverse().join('');
  }

  console.log(isPalindrome("А роза упала на лапу Азора")); // true
  console.log(isPalindrome("Привет")); // false
  