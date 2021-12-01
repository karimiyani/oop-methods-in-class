class Rectangle {
    constructor (_x, _y, _color) {
        this.x = _x ;
        this.y = _y ;
        this.color = _color ;
    }
    get area() {
        return this.x * this.y ;
    }
    set area (a){
        this.x = Math.sqrt(a);
        this.y = this.x  ;
    }
    printDescription() {
       console.log(`this rectangle is ${this.x} *  ${this.y}`)
    }

}
const rectangle1 = new Rectangle(20, 25, "red");
console.log(rectangle1.area);
//500

const rectangle2 = new Rectangle(30, 35, "red");
console.log(rectangle2.area);
// 1050

console.log(rectangle1.x);
//20
console.log(rectangle2.x);
//30


rectangle2.area = 930;
console.log(rectangle2.x);
// 30.495901363953813