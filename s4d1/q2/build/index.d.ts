interface obj {
    title: string;
    status: boolean;
    id: number;
}
interface name {
    firstName: string;
    lastName?: string;
}
declare const getName: ({ firstName, lastName }: name) => string;
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface PersonDetails {
    Prefix?: string;
    phones: number[];
    Addresses: string[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}
declare let users: object[];
declare const PhoneBook: (user: PersonDetails) => Array<object>;
