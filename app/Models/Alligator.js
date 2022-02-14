export class Alligator {
    constructor(name, color, wild, weight, teethType) {
        this.name = name;
        this.color = color;
        this.isWild = wild;
        this.weight = weight;
        this.teethType = teethType;

    }
    teeth() {
        console.log(`The ${this.constructor.name} has ${this.teethType}`)
    }
}

