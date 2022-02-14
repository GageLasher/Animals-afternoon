import { ProxyState } from "../AppState.js";
import { Alligator } from "../Models/Alligator.js";
import { Bear } from "../Models/Bear.js";
import { Cat } from "../Models/Cat.js";
import { Deer } from "../Models/Deer.js";
import { Elephant } from "../Models/Elephant.js";
import { Fox } from "../Models/Fox.js";
import { Giraffe } from "../Models/Giraffe.js";
import { Horse } from "../Models/Horse.js";
import { Iguana } from "../Models/Iguana.js";
import { Jaguar } from "../Models/Jaguar.js";
import { Kangaroo } from "../Models/Kangaroo.js";
import { Lama } from "../Models/Lama.js";
import { Mongoose } from "../Models/Mongoose.js";
import { Newt } from "../Models/Newt.js";
import { Value } from "../Models/Value.js";

let domestic = []
let wild = []
// let animals = [ally, tim, jerry, bambi, willy]


let ally = new Alligator("Ally", "Green", true, 200, "Sharp")
let tim = new Bear("Tim", "Brown", true, 100, "Sharp")
let jerry = new Cat("Jerry", "White", false, 5, "Dull")
let bambi = new Deer("Bambi", "Brown", true, 10, "Dull")
let willy = new Elephant("Willy", "Grey", true, 300, "Dull")
let felix = new Fox("Felix", "Red", true, 15, "Sharp")
let gerry = new Giraffe("Gerry", "Orange", true, 100, "Dull")
let harry = new Horse("Harry", "White", false, 60, "Dull")
let iggy = new Iguana("Iggy", "Green", false, 1, "None")
let jaggy = new Jaguar("Jaguar", "Black", true, 30, "Sharp")
let kaggy = new Kangaroo("Kaggy", "Tan", true, 30, "Dull")
let lammy = new Lama("Lammy", "Tan", true, 20, "Dull")
let mongy = new Mongoose("Mongy", "Brown", true, 30, "Dull")
let newty = new Newt("Newty", "Green", false, 1, "None")

let animals = [ally, tim, jerry]






class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }

  organize() {
    for (let i = 0; i < animals.length; i++) {
      const animal = animals[i];
       if (animal.isWild) {
         wild.push(animal)
       
       }
    }
     console.log(wild);
    
    
  }

  teethType() {
   animals.forEach(a => a.teeth())
  }
}

export const valuesService = new ValuesService();

