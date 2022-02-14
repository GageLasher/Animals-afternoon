export class Yak {
    constructor(name, color, wild, weight, teethType) {
        this.name = name;
        this.color = color;
        this.isWild = wild;
        this.weight = weight;
        this.teethType = teethType;

    }
    teeth(teeth) {
        alert(`The ${this.constructor.name} has ${teeth}`)
    }
}

