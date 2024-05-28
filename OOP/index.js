var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classes & Readonly
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person = new Person("Can", 28);
console.log(person);
// Access Modifiers & Getters & Setters
var Human = /** @class */ (function () {
    function Human(name, age, surname) {
        this._name = name;
        this._age = age;
        this._surname = surname;
    }
    Object.defineProperty(Human.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "getSurname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "getAge", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "setSurname", {
        set: function (surname) {
            this._surname = surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "setAge", {
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    return Human;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name, age, surname) {
        return _super.call(this, name, age, surname) || this;
    }
    Object.defineProperty(Programmer.prototype, "getJob", {
        get: function () {
            return "Programmer";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Programmer.prototype, "setJob", {
        set: function (job) {
            throw new Error("Programming is not a dynamic job.");
        },
        enumerable: false,
        configurable: true
    });
    return Programmer;
}(Human));
var can = new Programmer("Can", 28, "Savcı");
console.log("Name: ".concat(can.getName, " ").concat(can.getSurname, ", Age: ").concat(can.getAge, ", Job: ").concat(can.getJob));
var computerExample = {
    name: "i7",
    ram: 8,
    hdd: 100
};
console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.hdd);
var firstMovie = {
    name: "Star Wars",
    ratings: 8.9,
};
console.log("Movie Info: ".concat(firstMovie.name, ", ").concat(firstMovie.ratings));
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
console.log(add(2, 2));
console.log(subtract(2, 3));
function greet(person) {
    console.log("Hello, ".concat(person.firstName, " ").concat(person.lastName));
    person.sayHello();
}
var canPerson = {
    firstName: "Can",
    lastName: "Savcı",
    age: 28,
    sayHello: function () {
        console.log("Hi There");
    }
};
greet(canPerson);
var firstSong = {
    songName: "Kapalı Kapılar",
    singerName: "Saian",
    printSongInfo: function (songName, singerName) {
        return "Song: ".concat(songName, ", Singer: ").concat(singerName);
    },
};
console.log(firstSong.printSongInfo("Kapalı Kapılar", "Saian"));
var starWars = {
    name: "Star Wars",
    genre: "Action",
    ratings: 8.9,
    printMovieInfo: function (name, price, ratings) {
        return "Movie name: ".concat(name, ", Price: ").concat(price, ", Ratings: ").concat(ratings);
    }
};
var response = starWars.printMovieInfo("Star Wars", 100, 8.9);
console.log(response);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("Starting the car...");
    };
    Car.prototype.stop = function () {
        console.log("Stopping the car...");
    };
    return Car;
}());
var myCar = new Car();
myCar.start();
myCar.stop();
var car = {
    brand: "BMW",
    model: "M3",
    start: function () {
        console.log("Start");
    },
    stop: function () {
        console.log("Stop");
    }
};
car.start();
car.stop();
