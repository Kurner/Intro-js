const readlineSync = require("readline-sync");

class Rectangle
{
    constructor(topLeftXPos, topLeftYPos, width, length)
    {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle)
    {
        let x = this.topLeftXPos;
        let y = this.topLeftYPos;

        if(x === otherRectangle.topLeftXPos || y === otherRectangle.topLeftYPos)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

let rectangle1 = new Rectangle(2, 3, 5, 2);
let rectangle2 = new Rectangle(6, 3, 2, 7);
let rectangle3 = new Rectangle(2, 6, 7, 9);
let rectangle4 = new Rectangle(1, 8, 5, 2);

console.log(rectangle1.collides(rectangle2));
console.log(rectangle1.collides(rectangle3));
console.log(rectangle1.collides(rectangle4));