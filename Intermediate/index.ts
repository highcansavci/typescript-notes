// Generics
function combine<T>(item: T, defaultValue: T): [T, T] {
    return [item, defaultValue];
}

const dataNumber = combine<number>(1, 2);
console.log(dataNumber);

const dataString = combine<string>("hello", "world");
console.log(dataString);

const dataBoolean = combine<boolean>(false, true);
console.log(dataBoolean);

interface Dog {
    name: string;
    breed: string;
}

const dataDog = combine<Dog>({name: "Buddy", breed:"Labrador"}, {name: "Lady", breed: "American Cooker"});
console.log(dataDog);

function getRandomKeyValuePair<T>(obj: { [key: string]: T}): {
    key: string;
    value: T;
} {
    const keys: string[] = Object.keys(obj);
    const randKey: string = keys[Math.floor(Math.random() * keys.length)];
    return {key: randKey, value: obj[randKey]};
}

const stringObject: {a: string, b: string, c: string} = {a: "apple", b: "banana", c: "cherry"};
const randomStringPair: {key: string, value: string} = getRandomKeyValuePair<string>(stringObject);
console.log(randomStringPair);

const numberObject: {one: number, two: number, three: number} = {one: 1, two: 2, three: 3};
const randomNumberPair: {key: string, value: number} = getRandomKeyValuePair<number>(numberObject);
console.log(randomNumberPair);

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, num => num % 2 === 0);
console.log(evenNumbers);

const stringArray = ["apple", "banana", "cherry", "date"];
const shortWords = filterArray<string>(stringArray, word => word.length < 6);
console.log(shortWords);

interface Fruit {
    name: string;
    color: string;
}

const fruitArray: Fruit[] = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" },
];

const redFruits = filterArray<Fruit>(fruitArray, fruit => fruit.color === "Red");
console.log(redFruits);

function reversePair<T, U> (firstValue: T, secondValue: U): [U, T] {
    return [secondValue, firstValue];
}

const reversedPair: [number, string] = reversePair<string, number>("hello", 20);
console.log(reversedPair);

class Box<T> {
    private _content: T;
    constructor(_content: T) {
        this._content = _content;
    }
    get getContent(): T {
        return this._content;
    }
    set setContent(_content: T) {
        this._content = _content;
    }
}

const box: Box<string> = new Box<string>("Hello, TypeScript");
console.log(box.getContent);
box.setContent = "New Content Added";
console.log(box.getContent);
