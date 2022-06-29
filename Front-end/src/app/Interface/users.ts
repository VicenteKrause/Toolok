export interface User{
    name:string;
    password:string;
    admin:boolean;
}
export let listUsers:Array<User> = [];