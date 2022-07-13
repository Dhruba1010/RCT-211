

interface User {
    type: "user";
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: "admin";
    name: string;
    age: number;
    role: string;
}

const getUserType = (person : User | Admin):string => {
    return person.type;
}

const Person1 : User = {
    type: "user",
    name: "Dhruba Singha",
    age: 24,
    occupation: "SDE-1"
}

const Person2 : Admin = {
    type: "admin",
    name: "Dhruba Singha",
    age: 24,
    role: "SDE-1"
}

console.log(getUserType(Person1));
console.log(getUserType(Person2));