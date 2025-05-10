/*
function greet(name: string): string{
    return `Hello ${name}`
}

console.log(greet("World!")); */

//01.define function
function testInference() {
    //Variables inference
    let count = 10;
    let name = "sandu";
    let isActive = true;

}

//02.function Return Type Inference
/*function add(){
    return "Hello World";
}*/
function add (a,b){
    return a + b;
}

//03.Array Inference
function testArrayInference() {
    let animals =["dog", "cat", "elephant"];
    console.log(animals);

    let items = [1 , " " , true]
    console.log(items);
}
testArrayInference();

//Optional Parameters in Functions
function greet(name?: string){
    if (name){
        return `Hello ${name}`;
    }else {
        return "Hello Guest";
    }
}
console.log(greet("sandu"));
console.log(greet(""));

//default parameters
function greetDefault(name :string = "Guest") :string{
    return `Hello ${name}`;
}

console.log(greetDefault("sandu"));
console.log(greetDefault());

//ENUMS
function testEnums(){
    enum Season {
        WINTER ="WINTER", SPRING = "SPRING", SUMMER ="SUMMER", FALL = "FALL"
    }
    let season = Season.SPRING;
    console.log(season);
}
testEnums();

//Tuples
function testTuples(){
    //only this format is allowed
    type nameAge = readonly [string, number];

    let person :[string, number] = ["sandu", 24];
    console.log(person[0]);
    console.log(person[1]);
}
testTuples();

//Generics
function testGenerics <T>(Value : T) : T {
    return Value;
}

console.log(testGenerics<string>("sandu"));
console.log(testGenerics<number>(24));
console.log(testGenerics<boolean>(true));

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
    interface ApiResponse <T>{
        data : T;
        status : number;
    }

    let response: ApiResponse <string> = {
        data :"User data Added !",
        status : 200
    }

    console.log(response)

}
testGenericsWithInterface();

//Object Oriented features
//TS
interface Animal{
    run() : void;
}

class Dog implements Animal{
    private noOfLegs : number;
    private breed : string;

    constructor(noOfLegs: number, breed: string) {
        this.noOfLegs = noOfLegs;
        this.breed = breed;
    }

   public getNoOfLegs(noOfLegs: number) {
        this.noOfLegs = noOfLegs;
    }
   public setNoOfLegs(noOfLegs: number) {
        this.noOfLegs = noOfLegs;
    }

    public getBreed(breed: string) {
        this.breed = breed;
    }
    public setBreed(breed: string) {
        this.breed = breed;
    }

    run() {
        console.log("Dog is running");
    }

}

class Scooby extends Dog{
    private color : string;
    private age : number;

    constructor(noOfLegs: number, breed: string, color: string, age: number) {
        super(noOfLegs, breed);
        this.color = color;
        this.age = age;
    }
    public getColor(color: string) {
        this.color = color;
    }
    public setColor(color: string) {
        this.color = color;
    }
    public getAge(age: number) {
        this.age = age;
    }
    public setAge(age: number) {
        this.age = age;
    }

}

let scooby = new Scooby(4, "Cross", "Brown", 5);
scooby.run();
console.log(scooby);


class miki extends Dog {
    private _color: string;
    private _age: number;


    constructor(noOfLegs: number, breed: string, color: string, age: number) {
        super(noOfLegs, breed);
        this._color = color;
        this._age = age;
    }


    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}

let mikiDog = new miki(4, "Cross", "Brown", 5);
console.log(mikiDog)
console.log(mikiDog.age)
mikiDog.run();
mikiDog.color = "Black";
mikiDog.age = 6;
console.log(mikiDog.age)
console.log(mikiDog);















