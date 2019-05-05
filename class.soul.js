class Soul {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energys = 12;
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
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;

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