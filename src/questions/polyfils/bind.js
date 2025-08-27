//Polyfil of bind method;

const person1 = {
    username: "Parag",
    id: 2,
}
const person2 = {
    username: "Roshan",
    id: 19,
}

function printDetails(city, state) {
    console.log(`${this.id}---${this.username}--${city}---${state}`);
}
const myDetails = printDetails.bind(person1, "Pune", "Maharashtra");
// myDetails();

Function.prototype.myBind = function (obj = {}, ...args) {
    if (typeof (this) !== 'function') {
        throw new Error("Not a function ");
    }
    const fn = this;
    return function (...newargs) {
        obj.fn = fn;
        const result = obj.fn(...args, ...newargs);
        delete obj.fn
        return result;
    }
}
const myDetailsFromBind = printDetails.bind(person2, "Jaipur", "Rajasthan");
myDetailsFromBind();

