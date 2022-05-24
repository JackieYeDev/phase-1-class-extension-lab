// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    get countSides() {
        return this.sides.length;
    };
    get perimeter() {
        return this.sides.reduce((a,b) => a+b);
    };
};

class Triangle extends Polygon {
    get isValid() {
        if(this.countSides !== 3) return false;
        if(Math.max(...this.sides) > (this.perimeter - Math.max(...this.sides))) return false;
        return true;
    }
};

class Square extends Polygon {
    get isValid() {
        if(this.countSides !== 4) return false;
        if(this.sides.filter((e) =>  e !== this.perimeter/4).length != 0) return false;
        return true;
    };

    get area() {
        return Math.pow(this.sides[0], 2);
    };
}