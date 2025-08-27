const sample = "aaabssabahsbjhdasjbz";

function countOccurancesWithReduce(str) {
    const result = str.split("").reduce((acc, item) => {
        if (!acc[item]) {
            acc[item] = 0;
        }
        acc[item]++;
        return acc;
    }, {})
    return result;
}
console.log(countOccurancesWithReduce(sample));