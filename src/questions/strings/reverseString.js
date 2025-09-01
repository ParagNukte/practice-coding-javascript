const reverse1 = "hello";
const reverse2 = "abc";
const reverse3 = "JavaScript";
const reverse4 = "racecar";
const reverse5 = "a";

function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result.toLocaleLowerCase();
}
function reverseStringUsingSplitReverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(reverse1));
console.log(reverseString(reverse2));
console.log(reverseString(reverse3));
console.log(reverseString(reverse4));
console.log(reverseString(reverse5));
console.log(reverseStringUsingSplitReverse(reverse1));
console.log(reverseStringUsingSplitReverse(reverse2));
console.log(reverseStringUsingSplitReverse(reverse3));
console.log(reverseStringUsingSplitReverse(reverse4));
console.log(reverseStringUsingSplitReverse(reverse5));