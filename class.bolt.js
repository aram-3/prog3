class Bolt extends Base{
    constructor(x, y) {
        super(x, y)
        this.energyb = 30;
    }

    getNewDirections() {
        this.directions = [
            [this.x, this.y - 5],
            [this.x, this.y - 4],
            [this.x, this.y - 3],
            [this.x, this.y - 2],
            [this.x, this.y - 1],
            [this.x, this.y + 5],
            [this.x, this.y + 4],
            [this.x, this.y + 3],
            [this.x, this.y + 2],
            [this.x, this.y + 5],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x + 4, this.y],
            [this.x + 5, this.y],
            [this.x - 5, this.y],
            [this.x - 4, this.y],
            [this.x - 3, this.y],
            [this.x - 2, this.y],
            [this.x - 1, this.y],  
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energyb -= 2;
        if (empty) {
            var newBX = empty[0]
            var newBY = empty[1]
            matrix[newBY][newBX] = 5
            matrix[this.y][this.x] = 0

            this.x = newBX
            this.y = newBY
        }
    }

    mult() {
        var empty = random(this.chooseCell(2))
        if (empty && this.energyb > 10) {
            var newBX = empty[0]
            var newBY = empty[1]
            matrix[newBY][newBX] = 4
            var bt = new Bolt(newBX, newBY)
            boltArr.push(bt)
        }
    }
    eat() {
        var food = random(this.chooseCell(2))
        if (food) {
            var newBX = food[0]
            var newBY = food[1]
            matrix[newBY][newBX] = 5
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newBX && xotakerArr[i].y == newBY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newBX
            this.y = newBY
            this.energyb += 3
        }
    }

    die() {
        if (this.energyb <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in boltArr) {
                if (boltArr[i].x == this.x && boltArr[i].y == this.y) {
                    boltArr.splice(i, 1)
                }
            }
        }
    }
}