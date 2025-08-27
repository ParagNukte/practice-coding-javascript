const sample = [
    [1, 2, 3],
    ["a", "b", "c"],
    [true, false],
    [4.5, 6.7, 8.9],
    [["x", "y"], ["z"]],
    [100, 200, [300, 400]],
    ["nested", ["deep", ["deeper"]]],
    [[1, 2], [3, 4], [5, 6]],
    ["apple", "banana", "cherry"],
    [null, "end"]
]

function flattenArrayWithForLoop(arr, result = []) {

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenArrayWithForLoop(arr[i], result);
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flattenArrayWithForLoop(sample));