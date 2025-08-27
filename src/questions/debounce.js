//Debouncing 

function debounce(fun, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => fun(...args), delay);
    }
}
const display = (msg) => console.log("---", msg);

const callDisplay = debounce((...args) => display(...args), 1000);

callDisplay("Hello");
callDisplay("Hello Help");
callDisplay("Hello Please Help ");
callDisplay("Help Him");
callDisplay("Helll, Call Ambulance");
callDisplay("Doctor Please check ");
callDisplay("He's out of danger");
