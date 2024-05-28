// Strings
var myName = "Can Savcı";
console.log(myName);
// Numbers
var favNumber = 28;
console.log(favNumber);
// Boolean
var tsHard = false;
console.log(tsHard);
// Inference
var tech = "TypeScript";
console.log(tech);
console.log(typeof tech);
var ageNumber = 28;
var tsEasy = true;
console.log(ageNumber);
console.log(tsEasy);
console.log(typeof ageNumber);
console.log(typeof tsEasy);
// Any Type
var color = "crimson";
color = 20;
color = true;
console.log(color);
// Function Type
function addOne(num) {
    return num + 1;
}
var res = addOne(3);
console.log(res);
var double = function (x, y) { return x * y; };
var result = double(2, 10);
console.log(result);
// Default Params
function greet(person) {
    if (person === void 0) { person = "Anonymous"; }
    return "Hello, ".concat(person);
}
var greetStr = greet();
console.log(greetStr);
// Void Type
function printMessage(message) {
    console.log("This is my ".concat(message, "."));
}
printMessage("message for everyone");
// Never Type
function throwError(msg) {
    throw new Error(msg);
}
function infiniteLoop() {
    while (true) { }
}
var neverReturn;
function neverReturns() {
    return neverReturn;
}
// Array Type
var nums = [1, 2, 3, 4];
console.log(nums);
var strs = ["one", "two", "three"];
console.log(strs);
var items = [];
items.push("Keyboard");
console.log(items);
var strArray = ["there", "is", "only", "one", "truth"];
console.log(strArray);
// Multidimensional Arrays
var twoDArray = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 0]];
var threeDArray = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
console.log(twoDArray);
console.log(threeDArray);
// Objects
var person = {
    firstName: "Can",
    lastName: "Savcı",
    age: 30
};
console.log("Name: ".concat(person.firstName, " ").concat(person.lastName, ", Age: ").concat(person.age));
var printUserInfo = function (user) {
    return "Name: ".concat(user.name, ", Age: ").concat(user.age, ", Location: ").concat(user.location);
};
var userInfo = printUserInfo({ name: "Can", age: 28, location: "Turkey" });
console.log(userInfo);
var withLocation = { name: "Can", age: 28, location: "Turkey" };
var withoutLocation = { name: "Hazal", age: 29 };
console.log(withLocation);
console.log(withoutLocation);
var can = {
    first: "Can",
    last: "Savcı",
    age: 28,
    email: "highcsavci@gmail.com",
    password: "resetpassword123"
};
console.log("Name: ".concat(can.first, ", Surname: ").concat(can.last, ", Age: ").concat(can.age, ", Email: ").concat(can.email, ", Password: ").concat(can.password));
// Unions
var password = 20;
var user = {
    email: "admin@gmail.com",
    password: "admin"
};
var itemsUnion = ["one", "two", "three", 23, 35];
console.log(itemsUnion);
// Literals
var colorLiteral; // Other values are not allowed!
colorLiteral = "red";
console.log(colorLiteral);
// Tuples
var myTuple;
myTuple = [10, "Can Savcı"];
var first = myTuple[0], second = myTuple[1];
console.log(first);
console.log(second);
// Enums
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions["Sunny"] = "sunny";
    WeatherConditions["Cloudy"] = "cloudy";
    WeatherConditions["Rainy"] = "rainy";
    WeatherConditions["Snowy"] = "snowy";
})(WeatherConditions || (WeatherConditions = {}));
var currentWeather = WeatherConditions.Sunny;
console.log("The current weather is ".concat(currentWeather));
