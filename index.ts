// let arr: 'asd' = 'asd';
// let arr: string[] = [];
// let arr: [string, boolean?, number?] = ['hi', false];
// arr.push('adads'); // ошибка нарушение картежа

// enum Feature{
//     baner,
//     adminka,
//     premium,
// }

// const a = Feature.adminka;
// let b: Feature = Feature.premium;
// b = 0;
// console.log(a);

// let a: any = 2;
// a = "asd";
// let b: unknown = 2;
// b = 'aadfsfs';

// if(typeof b === 'string'){
//     b.toUpperCase();
// }


// let arr: Array<string> = [];
// let arr2: string[] = [];

// const person: {
//     name: string;
//     age: number;
//     city?: string;
// } = {
//     name: "John",
//     age: 23,
// };

// person.age = 44;
// person.city = 'asd';


// const person = {
//     name: 'John',
//     age: 23,
// }

// const person2: Person = {
//     name: 'Valerchik',
//     age: 21,
// }

// let id: number | string | boolean = '123456'
// id = 123

// let a: string & number = 2;


// type Person = {
//     name: string;
//     age: number;
//     city?: string;
// };


// type Admin = {
//     puzo: boolean,
//     age: string,
//     beerLiters: number
// }

// let person: Person | Admin = {
//     name: 'asd',
//     age: '23',
//     puzo: false,
//     beerLiters: 23
// }

// function foo(a: number, b: number){
//     return a + b;
// }

// const res = foo(2, 3);

// type Person = {
//     name: string;
//     age: number;
// };

// type Admin = {
//     pass: boolean;
//     isBoroda: boolean;
// };

// type PersonAdmin = Person & Admin;

// // const obj: PersonAdmin = {
// // };

// interface IPerson {
//     name: string;
//     age: number;
// }

// interface IAdmin {
//     pass: string;
//     isBoroda: boolean;
//     run(destination: string, speed: number): void;
// }

// interface IAdmin {
//     city: string;
// }

// const obj: IAdmin = {
//     pass: "Valerchik",
//     isBoroda: false,
//     city: "Gomel",
//     run(destination, speed) {
//         console.log(`${this.pass} run to ${destination}`)
//     }
// };

// obj.run('itstep', 23);


// interface IPersonAdmin extends IPerson, IAdmin {
//     city: string;
// }

// const obj: IPersonAdmin = {
//     name: 'Petya';
// };

// class Person {
//     name: string;
//     age: number = 0;
//     static readonly planet = 'Earth'

//     constructor(name: string) {
//         this.name = name;
//     }

//     run(destination: string): void {
//         console.log(`${this.name} to ${destination}`);
//     }
// }

// const p = new Person('Valerchik');
// console.log(p.name);

// p.name = 'Oleg';
// console.log(p.name);

// function greet(human: Person) {
//     console.log(`Hi there ${human.name}`)
// }

// const doq = {
//     nickName: 'bobik';
// }

// greet(dog);

//===================================

// interface IAdmin {
//     city: string;
// }

// const obj: IAdmin = {
//     pass: 'Valerchik',
//     isBoroda: false,
//     city: 'Gomel',
//     run(destination, speed) {
//         console.log(`${this.pass} runs to ${destination}`)
//     }

// };

// obj.run('itstep',23);


// interface IPersonAdmin extends IPerson, IAdmin {
//     city: string;
// }



class Person {

    protected age = 0;
    static planet = 'earth';

    constructor (
        protected readonly name: string,
        city: string
    ) {
        
    }

    showAge () {
        console.log(this.age);
    }

    run (destination: string): void {
        console.log(`${this.name} to ${destination}`);
    }
}

class Player extends Person {
    // constructor (name: string) {
    //     super(name);
    // }

    play () {
        console.log(`${this.name} plays and his age is ${this.age}`);
    }
}

const p = new Player('Valerchik');

console.log(p.age);


// function greet (human: Person) {
//     console.log(`Hi there ${human.name}`)
// }


