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

function deepClone(sampleObject) {
    if (sampleObject === null || sampleObject !== 'object') return sampleObject;

    if (Array.isArray(sampleObject)) {
        let clonedArr = [];
        for (let i = 0; i < sampleObject.length; i++) {
            clonedArr[i] = deepClone(sampleObject[i]);
        }
        return clonedArr;
    }

    let clonedObj = {};
    if (Object.hasOwn(item, key)) {
        clonedObj[key] = deepClone(item[key]);
    }
    return clonedObj;
}

console.log(deepClone(nestedObject));