const objectt = {
    name: "Alice",
    age: 30,
    contact: {
        email: "alice@example.com",
        phone: {
            home: "555-1234",
            work: "555-5678",
            harwork: {
                smart: "worked",
            }
        }
    },
    address: {
        street: "123 Main St",
        city: "Springfield",
        country: "USA"
    },
    hobbies: ["reading", "cycling", "coding"]
}


function flattenObj(obj, prefix = "", result = {}) {
    if (Array.isArray(obj)) {
        Object.keys(obj).forEach((value, index) => {
            let newKey = prefix ? `${prefix}[${index}]` : `[${index}]`;
            if (typeof (value) === "object" && value !== null) {
                flattenObj(value, newKey, result);
            }
            else {
                result[newKey] = value;
            }
        })
    } else if (typeof (obj) === "object" && obj !== null) {
        Object.keys(obj).forEach((value) => {
            let newKey = prefix ? `${prefix}.${value}` : value;
            flattenObj(obj[value], newKey, result);
        })
    }
    else {
        result[prefix] = obj;
    }
    return result;
}
console.log(flattenObj(objectt));