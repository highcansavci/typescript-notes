// Classes & Readonly
class Person {
    readonly name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person("Can", 28);
console.log(person);

// Access Modifiers & Getters & Setters
abstract class Human {

    private _name: string;
    private _surname: string;
    private _age: number;

    protected constructor(name: string, age: number, surname: string) {
        this._name = name;
        this._age = age;
        this._surname = surname;
    }

    get getName(): string {
        return this._name;
    }

    get getSurname(): string {
        return this._surname;
    }

    get getAge(): number {
        return this._age;
    }

    public abstract get getJob(): string;

    set setName(name: string) {
        this._name = name;
    }

    set setSurname(surname: string) {
        this._surname = surname;
    }

    set setAge(age: number) {
        this._age = age;
    }

    public abstract set setJob(job: string);
}

class Programmer extends Human {
    constructor(name: string, age: number, surname: string) {
        super(name, age, surname);
    }
    get getJob(): string {
        return "Programmer";
    }

    set setJob(job: string) {
        throw new Error("Programming is not a dynamic job.")
    }
}

const can: Human = new Programmer("Can", 28, "Savcı");
console.log(`Name: ${can.getName} ${can.getSurname}, Age: ${can.getAge}, Job: ${can.getJob}`);

// Interfaces
interface Computer {
    name: string;
    ram: number;
    hdd: number;
}

const computerExample: Computer = {
    name: "i7",
    ram: 8,
    hdd: 100
}

console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.hdd);

interface Movie {
    readonly name: string;
    ratings: number;
    genre?: string;
}

const firstMovie: Movie = {
    name: "Star Wars",
    ratings: 8.9,
}

console.log(`Movie Info: ${firstMovie.name}, ${firstMovie.ratings}`);

interface MathOperation {
    (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
console.log(add(2, 2));
console.log(subtract(2, 3));

interface PersonInterface {
    firstName: string;
    lastName: string;
    age: number;
    sayHello(): void
}

function greet(person: PersonInterface): void {
    console.log(`Hello, ${person.firstName} ${person.lastName}`);
    person.sayHello();
}

const canPerson: PersonInterface = {
    firstName: "Can",
    lastName: "Savcı",
    age: 28,
    sayHello(): void {
        console.log("Hi There");
    }
};

greet(canPerson);

interface Song {
    songName: string;
    singerName:  string;
    printSongInfo(songName: string, singerName: string): string;
}

const firstSong: Song = {
    songName: "Kapalı Kapılar",
    singerName: "Saian",
    printSongInfo: (songName: string, singerName: string): string =>{
        return `Song: ${songName}, Singer: ${singerName}`;
    },
};

console.log(firstSong.printSongInfo("Kapalı Kapılar", "Saian"));

interface MovieDetails {
    readonly name: String;
    ratings: number;
    printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenre extends MovieDetails {
    genre: string;
}

const starWars: MovieGenre = {
    name: "Star Wars",
    genre: "Action",
    ratings: 8.9,
    printMovieInfo(name: string, price: number, ratings: number): string | number {
        return `Movie name: ${name}, Price: ${price}, Ratings: ${ratings}`;
    }
}

const response: string | number = starWars.printMovieInfo("Star Wars", 100, 8.9);
console.log(response);

interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    start(): void {
        console.log("Starting the car...");
    }
    stop(): void {
        console.log("Stopping the car...");
    }
}

const myCar: Car = new Car();
myCar.start();
myCar.stop();

// Declaration Merging
interface Car {
    brand: string;
    start(): void;
}

interface Car {
    model: string;
    stop(): void;
}

const car: Car = {
    brand: "BMW",
    model: "M3",
    start(): void {
        console.log("Start");
    },
    stop(): void {
        console.log("Stop");
    }
}

car.start();
car.stop();