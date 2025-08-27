const sample = "aaabssabahsbjhdasjbz";

function countOccurances(str) {
    let occurances = {};

    for (let i = 0; i < str.length; i++) {
        if (!occurances[str[i]]) {
            occurances[str[i]] = 0;
        }
        occurances[str[i]]++;
    }
    return occurances;
}


console.log(countOccurances(sample));
