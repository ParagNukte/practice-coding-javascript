const nestedObject = {
    id: 1,
    name: "John Doe",
    address: {
        street: "123 Main St",
        city: "Metropolis",
        zip: 12345,
        geo: {
            lat: 40.7128,
            lng: -74.0060
        }
    },
    hobbies: ["reading", "gaming", { outdoor: ["cycling", "running"] }],
    contact: {
        email: "john@example.com",
        phones: [
            { type: "home", number: "123-456-7890" },
            { type: "work", number: "987-654-3210" }
        ]
    },
    meta: {
        createdAt: new Date("2023-01-01"),
        updatedAt: new Date("2023-05-05"),
        tags: new Set(["friend", "developer"]),
        prefs: new Map([
            ["theme", "dark"],
            ["notifications", true]
        ])
    }
};

const deepClone = JSON.parse(JSON.stringify(nestedObject));

console.log(deepClone);

//JSON only supports:
// string, number, boolean, null
// array
// plain object
// Anything else (Date, Set, Map, undefined, function, Symbol) either gets converted to something else or dropped.