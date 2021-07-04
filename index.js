// Your code here
class Polygon {
    constructor(intArr) {
        this.info = intArr;
    }

    get countSides() {
        return this.info.length;
    }

    get perimeter() {
        return this.info.reduce( (tot, side) => tot + side, 0);
    }
}



class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            let a = this.info[0];
            let b = this.info[1];
            let c = this.info[2];

            if ((a+b) > c && (b+c) > a && (a+c) > b) {
                return true;
            }
        }

        return false;
    }
}



class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            let a = this.info[0];
            let b = this.info[1];
            let c = this.info[2];
            let d = this.info[3];

            if (a === b && b === c && c === d) {
                return true;
            }
        }

        return false;
    }

    get area() {
        if (this.isValid) {
            return this.info[0] ** 2
        }
    }
}