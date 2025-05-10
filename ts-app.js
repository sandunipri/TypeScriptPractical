/*
function greet(name: string): string{
    return `Hello ${name}`
}

console.log(greet("World!")); */
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
//01.define function
function testInference() {
    //Variables inference
    var count = 10;
    var name = "sandu";
    var isActive = true;
}
//02.function Return Type Inference
/*function add(){
    return "Hello World";
}*/
function add(a, b) {
    return a + b;
}
//03.Array Inference
function testArrayInference() {
    var animals = ["dog", "cat", "elephant"];
    console.log(animals);
    var items = [1, " ", true];
    console.log(items);
}
testArrayInference();
//Optional Parameters in Functions
function greet(name) {
    if (name) {
        return "Hello ".concat(name);
    }
    else {
        return "Hello Guest";
    }
}
console.log(greet("sandu"));
console.log(greet(""));
//default parameters
function greetDefault(name) {
    if (name === void 0) { name = "Guest"; }
    return "Hello ".concat(name);
}
console.log(greetDefault("sandu"));
console.log(greetDefault());
//ENUMS
function testEnums() {
    var Season;
    (function (Season) {
        Season["WINTER"] = "WINTER";
        Season["SPRING"] = "SPRING";
        Season["SUMMER"] = "SUMMER";
        Season["FALL"] = "FALL";
    })(Season || (Season = {}));
    var season = Season.SPRING;
    console.log(season);
}
testEnums();
//Tuples
function testTuples() {
    var person = ["sandu", 24];
    console.log(person[0]);
    console.log(person[1]);
}
testTuples();
//Generics
function testGenerics(Value) {
    return Value;
}
console.log(testGenerics("sandu"));
console.log(testGenerics(24));
console.log(testGenerics(true));
//using interface
/*interface person{
    name : string;
    age : number;
}
function testGenericsWithInterface<T extends person>(Value : T) : T {
    return Value;
}

let person1 = {
    name : "sandu",
    age : 24
}


console.log(testGenericsWithInterface<person>(person1));*/
function testGenericsWithInterface() {
    var response = {
        data: "User data Added !",
        status: 200
    };
    console.log(response);
}
testGenericsWithInterface();
var Dog = /** @class */ (function () {
    function Dog(noOfLegs, breed) {
        this.noOfLegs = noOfLegs;
        this.breed = breed;
    }
    Dog.prototype.getNoOfLegs = function (noOfLegs) {
        this.noOfLegs = noOfLegs;
    };
    Dog.prototype.setNoOfLegs = function (noOfLegs) {
        this.noOfLegs = noOfLegs;
    };
    Dog.prototype.getBreed = function (breed) {
        this.breed = breed;
    };
    Dog.prototype.setBreed = function (breed) {
        this.breed = breed;
    };
    Dog.prototype.run = function () {
        console.log("Dog is running");
    };
    return Dog;
}());
var Scooby = /** @class */ (function (_super) {
    __extends(Scooby, _super);
    function Scooby(noOfLegs, breed, color, age) {
        var _this = _super.call(this, noOfLegs, breed) || this;
        _this.color = color;
        _this.age = age;
        return _this;
    }
    Scooby.prototype.getColor = function (color) {
        this.color = color;
    };
    Scooby.prototype.setColor = function (color) {
        this.color = color;
    };
    Scooby.prototype.getAge = function (age) {
        this.age = age;
    };
    Scooby.prototype.setAge = function (age) {
        this.age = age;
    };
    return Scooby;
}(Dog));
var scooby = new Scooby(4, "Cross", "Brown", 5);
scooby.run();
console.log(scooby);
var miki = /** @class */ (function (_super) {
    __extends(miki, _super);
    function miki(noOfLegs, breed, color, age) {
        var _this = _super.call(this, noOfLegs, breed) || this;
        _this._color = color;
        _this._age = age;
        return _this;
    }
    Object.defineProperty(miki.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(miki.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return miki;
}(Dog));
var mikiDog = new miki(4, "Cross", "Brown", 5);
console.log(mikiDog);
console.log(mikiDog.age);
mikiDog.run();
mikiDog.color = "Black";
mikiDog.age = 6;
console.log(mikiDog.age);
console.log(mikiDog);
