// <----------------------------------------------------------------------------------------------------------Grass---------------------------------------------------------------------------------------------------------------->
class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
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
        var empty = random(this.chooseCell(0))
        this.multiply++
        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}

// <----------------------------------------------------------------------------------------------------------Xotaker---------------------------------------------------------------------------------------------------------------->


class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
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
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new Xotaker(newX, newY)
            xotakerArr.push(xt)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var food = random(this.chooseCell(1))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
    }
}
// <----------------------------------------------------------------------------------------------------------Gishatich---------------------------------------------------------------------------------------------------------------->

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

// <----------------------------------------------------------------------------------------------------------Soul---------------------------------------------------------------------------------------------------------------->


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
// <----------------------------------------------------------------------------------------------------------Bolt---------------------------------------------------------------------------------------------------------------->

class Bolt {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energyb = 30;
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
            [this.x+1, this.y],
            [this.x+2, this.y],
            [this.x+3, this.y],
            [this.x+4, this.y],
            [this.x+5, this.y],
            [this.x-5, this.y],
            [this.x-4, this.y],
            [this.x-3, this.y],
            [this.x-2, this.y],
            [this.x-1, this.y],
        ]
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
            [this.x+1, this.y],
            [this.x+2, this.y],
            [this.x+3, this.y],
            [this.x+4, this.y],
            [this.x+5, this.y],
            [this.x-5, this.y],
            [this.x-4, this.y],
            [this.x-3, this.y],
            [this.x-2, this.y],
            [this.x-1, this.y],  
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