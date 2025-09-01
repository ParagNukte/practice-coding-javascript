const sample = [3, 1, 2, 2, 5, 2, 3, 7];

function removeDupliates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDupliates(sample));

Array.prototype.duplicateRemove = function () {
    let result = [];
    let isDuplicate = false;

    const arr = this;
    for (let i = 0; i < arr.length; i++) {
        isDuplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                isDuplicate = true;
                break;
            }

        }
        if (!isDuplicate) {
            result.push(arr[i])

        }
        return result;
    }

}

sample.duplicateRemove();
// console.log(remove(sample));
// console.log(result);