//Polyfil of apply method;


const person1 = {
    username: "Parag",
    id: 2,
}
const person2 = {
    username: "Roshan",
    id: 19,
}

function printMyDetails(city, state) {
    console.log(`${this.id}---${this.username}---${city}---${state}`);
}

printMyDetails.call(person1, "Pune", "Maharshtra");

Function.prototype.myCall = function (obj = {}, ...args) {
    if (typeof (this) !== 'function') {
        throw new Error("Not a function");
    }
    obj.fn = this;
    const result = obj.fn(...args);
    delete obj.fn;
    return result;
}
try {
    const emptyobj = {};
    emptyobj.myCall(person2, "Pune", "Maharshtra");

} catch (err) {
    console.log(err.message)
}