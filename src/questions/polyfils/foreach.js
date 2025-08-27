const sample = [1, 2, 3, 4, 5, 6];

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}
const result = [];
sample.myForEach(num => result.push(num + 1));
console.log(result)