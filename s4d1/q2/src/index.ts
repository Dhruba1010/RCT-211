
//interface
interface obj {
    title: string;
    status: boolean;
    id:number;
}

//function with interface
interface name {
    firstName: string;
    lastName?: string;
}
const getName = ({firstName, lastName} : name) => {
    if(lastName){
        return (`${firstName} ${lastName}`);
    }else{
        return firstName;
    }
}

//address interface
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}

//person details interface
interface PersonDetails {
    Prefix?: string;
    phones: number[];
    Addresses: string[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}

//phoneBook
let users: object[] = [];
const PhoneBook = (user: PersonDetails):Array<object> => {
    users.push(user);
    return users;
}
