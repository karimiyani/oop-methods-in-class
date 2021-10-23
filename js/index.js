class Rectangle {
    constructor (_x, _y, _color) {
        this.x = _x ;
        this.y = _y ;
        this.color = _color ;
    }
    getArea() {
        return this.x * this.y ;
    }
    printDescription() {
       console.log(`this rectangle is ${this.x} *  ${this.y}`)
    }

};
const rectangle1 = new Rectangle(20, 25, "red");
console.log(rectangle1.getArea());
//500

const rectangle2 = new Rectangle(30, 35, "red");
console.log(rectangle2.printDescription());
// this rectangle is 30 *  35
