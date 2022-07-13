const getUserType = (person) => {
    return person.type;
};
const Person1 = {
    type: "user",
    name: "Dhruba Singha",
    age: 24,
    occupation: "SDE-1"
};
const Person2 = {
    type: "admin",
    name: "Dhruba Singha",
    age: 24,
    role: "SDE-1"
};
console.log(getUserType(Person1));
console.log(getUserType(Person2));
//# sourceMappingURL=index.js.map