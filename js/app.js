document.addEventListener('DOMContentLoaded', function() {
    // ---------- DOM References ----------
    let gameBoard = document.getElementById('game-board');

    let box1 = document.getElementById('box1');
    let box2 = document.getElementById('box2');
    let box3 = document.getElementById('box3');
    let box4 = document.getElementById('box4');
    let box5 = document.getElementById('box5');
    let box6 = document.getElementById('box6');
    let box7 = document.getElementById('box7');
    let box8 = document.getElementById('box8');
    let box9 = document.getElementById('box9');

    let resetButton = document.getElementById('reset');

    let turnMessage = document.querySelector('h2');

    // -------------- Event Listeners ------------
    box1.addEventListener('click', xFill);
    box1.addEventListener('click', oFill);

    box2.addEventListener('click', xFill);
    box2.addEventListener('click', oFill);

    box3.addEventListener('click', xFill);
    box3.addEventListener('click', oFill);

    box4.addEventListener('click', xFill);
    box4.addEventListener('click', oFill);

    box5.addEventListener('click', xFill);
    box5.addEventListener('click', oFill);

    box6.addEventListener('click', xFill);
    box6.addEventListener('click', oFill);

    box7.addEventListener('click', xFill);
    box7.addEventListener('click', oFill);

    box8.addEventListener('click', xFill);
    box8.addEventListener('click', oFill);

    box9.addEventListener('click', xFill);
    box9.addEventListener('click', oFill);

    gameBoard.addEventListener('click', clickCounter);

    resetButton.addEventListener('click', reset);

    // ------------- Game Logic Variables ----------------
    let boxArray = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];
    let xArray = [];
    let oArray = [];

    // -------------- Functions -------------
    // Fills the clicked box with an X, adds that id to the xArray
    function xFill(e) {
        e.target.classList.add("xteam");
        let x = e.target.id;
        x.innerText = "X";
        xArray.push(x);
        console.log(xArray + " x array"); //e.target.id.value?
    }

    // Fills the clicked box with an O, adds that id to the oArray
    function oFill(e) {
        e.target.classList.add("oteam");
        let o = e.target.id;
        o.innerText = "O";
        oArray.push(o);
        console.log(oArray + " o array");
    }

    //Changes X and O turn, based on where in the for loop
    // Places an X or an O in the clicked on div
    // Do I need to give this function an event parameter?
    function clickCounter(e) {
        for (let i = 0; i < boxArray.length; i++) {
            if ((i == 0) || (i == 2) || (i == 4) || (i == 6) || (i == 8)) { //boxArray[i]
                xFill(e);
                endGame();
                // TO-DO: Iterate through for loop on click - how?
                turnMessage.innerText = "X turn";
            } else if ((i == 1) || (i == 3) || (i == 5) || (i == 7)) {
                oFill(e);
                endGame();
                // TO-DO: Iterate through for loop on click
                turnMessage.innerText = "O turn";
            }
        }
    }
    //Checking against winning combinations. How can I do this with switch?
    function endGame() {
        console.log("endGame works")
        // xArray win conditions
        if (xArray.includes("box1", "box4", "box7")) {
            turnMessage.innerText = "X wins!";
        }
        else if (xArray.includes("box2", "box5", "box8")) {
            turnMessage.innerText = "X wins!";
        }
        else if (xArray.includes("box3", "box6", "box9")) {
            turnMessage.innerText = "X wins!";
        }
        else if (xArray.includes("box1", "box2", "box3")) {
            turnMessage.innerText = "X wins!";
        }
        else if (xArray.includes("box4", "box5", "box6")) {
            turnMessage.innerText = "X wins!";
        }
        else if (xArray.includes("box7", "box8", "box9")) {
            turnMessage.innerText = "X wins!";
        }
        else if (xArray.includes("box3", "box5", "box7")) {
            turnMessage.innerText = "X wins!";
        }
        else if (xArray.includes("box1", "box5", "box9")) {
            turnMessage.innerText = "X wins!";
        }
        // oArray win conditions
        else if (oArray.includes("box1", "box4", "box7")) {
            turnMessage.innerText = "O wins!";
        }
        else if (oArray.includes("box2", "box5", "box8")) {
            turnMessage.innerText = "O wins!";
        }
        else if (oArray.includes("box3", "box6", "box9")) {
            turnMessage.innerText = "O wins!";
        }
        else if (oArray.includes("box1", "box2", "box3")) {
            turnMessage.innerText = "O wins!";
        }
        else if (oArray.includes("box4", "box5", "box6")) {
            turnMessage.innerText = "O wins!";
        }
        else if (oArray.includes("box7", "box8", "box9")) {
            turnMessage.innerText = "O wins!";
        }
        else if (oArray.includes("box3", "box5", "box7")) {
            turnMessage.innerText = "O wins!";
        }
        else if (oArray.includes("box1", "box5", "box9")) {
            turnMessage.innerText = "O wins!";
        }
        // Draw condition
        else {
            turnMessage.innerText = "It's a draw!";
        }
    }

    function reset() {
        // Empty xArray and oArray
        // Reset the HTML displays of each div
    }
})