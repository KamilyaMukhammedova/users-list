export interface IUser {
    id: number;
    email: string;
    phone: string;
    username: string;
    password: string;
    name: IName;
    address: IAddress;
    __v: number;
}

export interface IUsersState {
    data: IUser[];
    fetching: boolean;
    error?: string;
}

interface IGeoLocation {
    lat: string;
    long: string;
}

interface IAddress {
    geolocation: IGeoLocation;
    city: string;
    street: string;
    number: number;
    zipcode: string;
}

interface IName {
    firstname: string;
    lastname: string;
}


