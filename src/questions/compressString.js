const sample = "aaabssabahsbjhdasjb";

function compressString(str) {
    let result = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        }
        else {
            result = result + str[i] + (count > 1 ? count : "");
            count = 1;
        }
    }
    console.log("length of str = ", str.length);
    console.log("length of result  = ", result.length);
    return result;
}


console.log(compressString(sample));