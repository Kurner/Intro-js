const readlineSync = require("readline-sync");

class Circle
{
    constructor(xPos, yPos, radius)
    {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    get surface()
    {
        let surface = 2 * Math.PI * this.radius;

        return surface;
    }

    move(xOffset, yOffset)
    {
        this.xPos = xOffset;
        this.yPos = yOffset;
    }
}

let circle = new Circle(2, 3, 5);
let circle2 = new Circle(5,4,2);

console.log(circle.surface);
console.log(circle2.surface);