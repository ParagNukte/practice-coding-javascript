const countVC1 = "hello";
const countVC2 = "JavaScript";
const countVC3 = "aeiou";
const countVC4 = "xyz";
const countVC5 = "Interview";

function countConsonantsAndVowels(str) {
    str = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = { consonants: 0, vowels: 0 };
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count.vowels++;
        }
        else {
            count.consonants++;
        }
    }
    return count;
}

console.log(countConsonantsAndVowels(countVC1));
console.log(countConsonantsAndVowels(countVC2));
console.log(countConsonantsAndVowels(countVC3));
console.log(countConsonantsAndVowels(countVC4));
console.log(countConsonantsAndVowels(countVC5));