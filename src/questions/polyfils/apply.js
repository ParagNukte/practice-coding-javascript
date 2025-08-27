//Polyfil of apply method;

const person1 = {
    username: "Parag",
    id: 2,
}
const person2 = {
    username: "Roshan",
    id: 19,
}

function printMyDetails(city, state) { console.log(`${this.id}---${this.username}---${city}---${state}`) }

printMyDetails.apply(person1, ["Pune", "Maharashtra"]);

Function.prototype.myApply = function (obj = [], args = []) {
    if (typeof (this) !== 'function') {
        throw new Error("Not a Function");
    }
    obj.fn = this;
    const result = obj.fn(...args);
    delete obj.fn;
    return result;
}

printMyDetails.myApply(person2, ["Jaipur", "Rajasthan"]);
