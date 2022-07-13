const getName = ({ firstName, lastName }) => {
    if (lastName) {
        return (`${firstName} ${lastName}`);
    }
    else {
        return firstName;
    }
};
//phoneBook
let users = [];
const PhoneBook = (user) => {
    users.push(user);
    return users;
};
//# sourceMappingURL=index.js.map