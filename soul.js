var Base=require('./base');

module.exports = class Soul extends Base{
    constructor(x, y) {
        super(x, y)
        this.energys = 12;
    }

    getNewDirections() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);
    }

    mult() {
        var empty = random(this.chooseCell(3))
        if (empty && this.energys > 7) {
            var newSX = empty[0]
            var newSY = empty[1]
            matrix[newSY][newSX] = 4
            var sl = new Soul(newSX, newSY)
            soulArr.push(sl)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energys -= 3;
        if (empty) {
            var newSX = empty[0]
            var newSY = empty[1]
            matrix[newSY][newSX] = 4
            matrix[this.y][this.x] = 0
            this.x = newSX
            this.y = newSY
        }
    }

    eat() {
        var food = random(this.chooseCell(5))
        if (food) {
            var newSX = food[0]
            var newSY = food[1]
            matrix[newSY][newSX] = 4
            matrix[this.y][this.x] = 0

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newSX && gishatichArr[i].y == newSY) {
                    gishatichArr.splice(i, 1)
                }
            }
            for (var i in boltArr) {
                if (boltArr[i].x == newSX && boltArr[i].y == newSY) {
                    boltArr.splice(i, 1)
                }
            }

            this.x = newSX
            this.y = newSY
            this.energys += 4
        }
    }

    die() {
        if (this.energys <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in soulArr) {
                if (soulArr[i].x == this.x && soulArr[i].y == this.y) {
                    soulArr.splice(i, 1)
                }
            }
        }
    }
}