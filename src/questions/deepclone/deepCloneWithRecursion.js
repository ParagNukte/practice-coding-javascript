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

function deepCloneWithoutDateSetMap(obj) {

    if (obj === null || typeof (obj) !== 'object') return obj;

    if (Array.isArray(obj)) {
        let clone = [];
        for (let key in obj) {
            clone[key] = deepCloneWithoutDateSetMap(obj[key]);
        }
        return clone;
    }

    let cloneObj = {};
    for (let key in obj)
        if (Object.hasOwn(obj, key)) {
            cloneObj[key] = deepCloneWithoutDateSetMap(obj[key]);
        }
    return cloneObj;
}

function deepCloneWithDateSetMap(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj; // primitives
    }

    // Handle Dates
    if (obj instanceof Date) {
        return new Date(obj);
    }

    // Handle RegExp
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }

    // Handle Sets
    if (obj instanceof Set) {
        return new Set([...obj].map(item => deepCloneWithDateSetMap(item)));
    }

    // Handle Maps
    if (obj instanceof Map) {
        return new Map([...obj].map(([key, value]) => [deepCloneWithDateSetMap(key), deepCloneWithDateSetMap(value)]));
    }

    // Handle Arrays
    if (Array.isArray(obj)) {
        return obj.map(item => deepCloneWithDateSetMap(item));
    }

    // Handle plain objects
    let clone = {};
    for (let key of Object.keys(obj)) {
        clone[key] = deepCloneWithDateSetMap(obj[key]);
    }
    return clone;
}
console.log(deepCloneWithoutDateSetMap(nestedObject));
console.log(deepCloneWithDateSetMap(nestedObject));
