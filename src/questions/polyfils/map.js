const sample = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}
const result = sample.myMap(item => item * item);
console.log(result)