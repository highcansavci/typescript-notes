// Strings
let myName: string = "Can Savcı";
console.log(myName);

// Numbers
let favNumber: number = 28;
console.log(favNumber);

// Boolean
let tsHard: boolean = false;
console.log(tsHard);

// Inference
let tech = "TypeScript";
console.log(tech);
console.log(typeof tech);

let ageNumber = 28;
let tsEasy = true;
console.log(ageNumber);
console.log(tsEasy);
console.log(typeof ageNumber);
console.log(typeof tsEasy);

// Any Type
let color: any = "crimson";
color = 20;
color = true;
console.log(color);

// Function Type
function addOne(num: number): number {
    return num + 1;
}

const res: number = addOne(3);
console.log(res);

const double = (x: number, y: number): number => x * y;
const result: number = double(2, 10);
console.log(result);

// Default Params
function greet(person: string = "Anonymous"): string {
    return `Hello, ${person}`;
}

const greetStr: string = greet();
console.log(greetStr);

// Void Type
function printMessage(message: string): void {
    console.log(`This is my ${message}.`);
}

printMessage("message for everyone");

// Never Type
function throwError(msg: string): never {
    throw new Error(msg);
}

function infiniteLoop(): never {
    while (true) {}
}

let neverReturn: never;
function neverReturns(): never {
    return neverReturn;
}

// Array Type
const nums: number[] = [1, 2, 3, 4];
console.log(nums);

const strs: string[] = ["one", "two", "three"];
console.log(strs);

const items: string[] = [];
items.push("Keyboard");
console.log(items);

const strArray: Array<string> = ["there", "is", "only", "one", "truth"];
console.log(strArray);

// Multidimensional Arrays
const twoDArray: number[][] = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 0]];
const threeDArray: number[][][] = [[[1, 2], [3, 4]],[[5, 6], [7, 8]]];
console.log(twoDArray);
console.log(threeDArray);

// Objects
const person : {firstName: string, lastName: string, age: number} = {
    firstName: "Can",
    lastName: "Savcı",
    age: 30
}

console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

// Type Aliases
type User = {
    name: string;
    age: number;
    location: string
}

const printUserInfo = (user: User): string => {
    return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`;
}
const userInfo = printUserInfo({name: "Can", age: 28, location: "Turkey"});
console.log(userInfo);

// Optional Properties & Readonly
type UserOptional = {
    name: string;
    age: number;
    readonly location?: string
}

const withLocation: UserOptional = {name: "Can", age: 28, location: "Turkey"};
const withoutLocation: UserOptional = {name: "Hazal", age: 29}
console.log(withLocation);
console.log(withoutLocation);

// Intersection Type
type UserInfo = {
    first: string;
    last: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password: string;
}

type UserWithAccountDetails = UserInfo & AccountDetails;

const can: UserWithAccountDetails = {
    first: "Can",
    last: "Savcı",
    age: 28,
    email: "highcsavci@gmail.com",
    password: "resetpassword123"
};
console.log(`Name: ${can.first}, Surname: ${can.last}, Age: ${can.age}, Email: ${can.email}, Password: ${can.password}`);

// Unions
let password: string | number = 20;
let user : UserInfo | AccountDetails = {
    email: "admin@gmail.com",
    password: "admin"
};
const itemsUnion: (string | number)[] = ["one", "two", "three", 23, 35];
console.log(itemsUnion);

// Literals
let colorLiteral: "red" | "crimson" | "blue"; // Other values are not allowed!
colorLiteral = "red";
console.log(colorLiteral);

// Tuples
let myTuple: [number, string]
myTuple = [10, "Can Savcı"];
let [first, second] = myTuple;
console.log(first);
console.log(second);

// Enums
enum WeatherConditions {
    Sunny = "sunny",
    Cloudy = "cloudy",
    Rainy = "rainy",
    Snowy = "snowy"
}

const currentWeather: WeatherConditions = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);
