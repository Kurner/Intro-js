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

function random()
{
    return Math.floor(Math.random() * 5);
}

function generateRectangle(n)
{ i++;

    for(i = 0; i <= n; i++)
    {
        rectangle[i] = new Rectangle(random(), random(), random(), random())
    }

    for(i = 0; i <= n; i++)
    {
        if(rectangle[i].collides(rectangle[i++]) == true)
        {
            collide += 1;
        }
    }

    return('Il y a ' + collide + ' rectangle(s) qui entrent en collision !');
}

console.log(generateRectangle(1000));