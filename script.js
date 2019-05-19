function setup() {
    var socket = io();
    var side = 28;
    var matrix = [];
    let grassCount = document.getElementById('grassCount');
    let grassEaterCount = document.getElementById('grassEaterCount');
    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        matrix = data.matrix;
        createCanvas(matrix[0].length * side, matrix.length * side)
        background('#acacac');

        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    fill("green");
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                }

                else if (matrix[y][x] == 3) {
                    fill("red");
                }
                else if (matrix[y][x] == 4) {
                    fill("white");
                }
                else if (matrix[y][x] == 5) {
                    fill("black");
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                }

                rect(x * side, y * side, side, side)

            }
        }
    }
}
