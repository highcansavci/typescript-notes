// Generics
function combine(item, defaultValue) {
    return [item, defaultValue];
}
var dataNumber = combine(1, 2);
console.log(dataNumber);
var dataString = combine("hello", "world");
console.log(dataString);
var dataBoolean = combine(false, true);
console.log(dataBoolean);
var dataDog = combine({ name: "Buddy", breed: "Labrador" }, { name: "Lady", breed: "American Cooker" });
console.log(dataDog);
function getRandomKeyValuePair(obj) {
    var keys = Object.keys(obj);
    var randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}
var stringObject = { a: "apple", b: "banana", c: "cherry" };
var randomStringPair = getRandomKeyValuePair(stringObject);
console.log(randomStringPair);
var numberObject = { one: 1, two: 2, three: 3 };
var randomNumberPair = getRandomKeyValuePair(numberObject);
console.log(randomNumberPair);
function filterArray(array, condition) {
    return array.filter(function (item) { return condition(item); });
}
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = filterArray(numberArray, function (num) { return num % 2 === 0; });
console.log(evenNumbers);
var stringArray = ["apple", "banana", "cherry", "date"];
var shortWords = filterArray(stringArray, function (word) { return word.length < 6; });
console.log(shortWords);
var fruitArray = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" },
];
var redFruits = filterArray(fruitArray, function (fruit) { return fruit.color === "Red"; });
console.log(redFruits);
function reversePair(firstValue, secondValue) {
    return [secondValue, firstValue];
}
var reversedPair = reversePair("hello", 20);
console.log(reversedPair);
var Box = /** @class */ (function () {
    function Box(_content) {
        this._content = _content;
    }
    Object.defineProperty(Box.prototype, "getContent", {
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "setContent", {
        set: function (_content) {
            this._content = _content;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var box = new Box("Hello, TypeScript");
console.log(box.getContent);
box.setContent = "New Content Added";
console.log(box.getContent);
