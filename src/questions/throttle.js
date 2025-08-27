//throttling 

function throttle(fun, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      return fun(...args);
    }
  }

}

function display(msg) {
  console.log("--", msg)
}

const callDisplay = throttle((arg) => display(arg), 1000);
callDisplay("Hello")
callDisplay("Hello Hey")
callDisplay("Hello Dear")
callDisplay("Hello Hey Dear")
callDisplay("Hello Its ME")
setTimeout(() => callDisplay("Hello Goood"), 2200
)