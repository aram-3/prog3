var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
var fs = require("fs");

grassArr = [];
xotakerArr = [];
gishatichArr = [];
soulArr = [];
boltArr = [];
charecterStatistic = {
    died: {
        Xotakerss: 0,
        hunters: 0,
    },
    killed: {
        grasses: 0,
        xotakers: 0,
    },
    born: {
        grasses: 0,
        xotakers: 0,
        hunters: 0,
    },
    ate: {
        xotakers: 0,
        hunters: 0,
    },
}
matrix = [];

var m = Math.round((Math.random() * 10) + 25)
var n = Math.round((Math.random() * 10) + 13)
var matrix = []

for (var y = 0; y < m; y++) {
    matrix[y] = []
    for (var x = 0; x < n; x++) {
        matrix[y].push(Math.round(Math.random(0, 1)))

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        matrix[y].push(getRandomInt(6))
    }
}



exanak = "Ձմեռ";

var Grass = require("./grass.js");
var Xotaker = require("./xotaker.js");
var Gishatich = require("./gishatich.js");
var Soul = require("./soul.js");
var Bolt = require("./bolt.js");


function start() {
    io.sockets.emit('matrix', matrix);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y)
                gishatichArr.push(gsh)
            }
            else if (matrix[y][x] == 4) {
                var sl = new Soul(x, y)
                soulArr.push(sl)
            }
            else if (matrix[y][x] == 5) {
                var sl = new Bolt(x, y)
                boltArr.push(sl)
            }
        }
    }
}

start()

setInterval(game, 1000);
seasontime=0;
function game() {
    io.sockets.emit('number', [grassArr.length, xotakerArr.length, gishatichArr.length])
    io.sockets.emit('statistics', charecterStatistic);
    seasontime++;
    if(seasontime <= 10){
        season = "Ամառ"
        var seas = season;
    }
    else if(seasontime <= 19){
        season = "Ձմեռ"
        var seas = season;
    }
    else{
        seasontime = 0;
    }
    for (var i in grassArr) {
        grassArr[i].mult()
    }
    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }


    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }

    for (var i in soulArr) {
        soulArr[i].eat()
        soulArr[i].move()
        soulArr[i].mult()
        soulArr[i].die()
    }

    for (var i in boltArr) {
        boltArr[i].eat()
        boltArr[i].move()
        boltArr[i].mult()
        boltArr[i].die()
    }
    console.log(seas)
    io.sockets.emit('matrix', server);
    io.sockets.emit('season', seas);
}
setInterval(game, 100)

var statistics= {};
setInterval(function(){
    statistics.xot=grassArr.length;
    statistics.xotaker=xotakerArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics),function(){
        console.log("send");
    })
},2000)

