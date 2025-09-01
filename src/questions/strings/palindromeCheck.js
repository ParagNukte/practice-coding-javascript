const palindrome1 = "madam";
const palindrome2 = "racecar";
const palindrome3 = "hello";
const palindrome4 = "abba";
const palindrome5 = "abcba";

function palindromeCheck(str) {
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str[start] !== str[end]) {
            return "not Palindrome";
        }
        start++; end--;
    }
    return "Palindrome"
}
console.log(`The String ${palindrome1} is ${palindromeCheck(palindrome1)}`)
console.log(`The String ${palindrome2} is ${palindromeCheck(palindrome2)}`)
console.log(`The String ${palindrome3} is ${palindromeCheck(palindrome3)}`)
console.log(`The String ${palindrome4} is ${palindromeCheck(palindrome4)}`)
console.log(`The String ${palindrome5} is ${palindromeCheck(palindrome5)}`)