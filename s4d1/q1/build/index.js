//string
let Name = "Dhruba Singha";
//number
let age = 24;
//bolean
let isFetching = false;
//array of numbers
let array = [1, 2, 3, 4, 5];
//array of strings of generic types
let genAarray = ["Masai", "School"];
//tuple
let nTuple = ["Dhruba", true];
//enum
var user;
(function (user) {
    user[user["User"] = 0] = "User";
    user[user["SuperUser"] = 1] = "SuperUser";
    user[user["Admin"] = 2] = "Admin";
    user[user["SuperAdmin"] = 3] = "SuperAdmin";
})(user || (user = {}));
;
//product function
const product = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};
//printing functions
const printName = (name) => {
    console.log(name);
};
//# sourceMappingURL=index.js.map