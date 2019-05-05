class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energyzer = 10;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
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
        var empty = random(this.chooseCell(2))
        if (empty && this.energyzer > 12) {
            var newGX = empty[0]
            var newGY = empty[1]
            matrix[newGY][newGX] = 3
            var gsh = new Gishatich(newGX, newGY)
            gishatichArr.push(gsh)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energyzer -= 2;
        if (empty) {
            var newGX = empty[0]
            var newGY = empty[1]
            matrix[newGY][newGX] = 3
            matrix[this.y][this.x] = 0

            this.x = newGX
            this.y = newGY
        }
    }

    eat() {
        var food = random(this.chooseCell(2))
        if (food) {
            var newGX = food[0]
            var newGY = food[1]
            matrix[newGY][newGX] = 3
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newGX && xotakerArr[i].y == newGY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newGX
            this.y = newGY
            this.energyzer += 3
        }
    }

    die() {
        if (this.energyzer <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }
    }
}