
//string
let Name:string = "Dhruba Singha";

//number
let age:number = 24;

//bolean
let isFetching:boolean = false;

//array of numbers
let array:number[] = [1,2,3,4,5];

//array of strings of generic types
let genAarray: Array<string> = ["Masai", "School"];

//tuple
let nTuple:[string, boolean] = ["Dhruba", true];

//enum
enum user {
    User,
    SuperUser,
    Admin,
    SuperAdmin
};

//product function
const product = (a:number, b:number):number => {
    return a*b;
}

const divide = (a:number, b:number):number => {
    return a/b;
}

//printing functions
const printName = (name:string):void => {
    console.log(name);
}
