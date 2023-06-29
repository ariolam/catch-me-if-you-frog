window.addEventListener("load", () => {
    //Buttons
    const playBtn = document.querySelector(".play-btn");
    const intructionsBtn = document.querySelector(".intructions-btn");
    const exitInstrBtn = document.querySelector(".exit-instr-btn");
    const restartBtn = document.querySelector(".restart-btn");

    //Audio
    const gameSound = new Audio("./sound/game.mp3");
    gameSound.volume = 0.2;

    //Instructions screen
    const intructionsScreen = document.querySelector(".instructions-screen");

    let game;

    function startGame() {
        game = new Game(); /*assign new variable to game object */
        game.start();
        //added event listerner that handles keydown event
        document.addEventListener("keydown", (event) => {
            event.preventDefault(); /* removes ths scroll bars in mac */
            const key = event.key;
            const possibleKeystrokes = ["ArrowUp", "ArrowDown"];
            // Check if the pressed key is in the possibleKeystrokes array
            if (possibleKeystrokes.includes(key)) {
                // Update player's directionX and directionY based on the key pressed
                switch (key) {
                    case "ArrowUp":
                        game.player.directionY = -2;
                        break;
                    case "ArrowDown":
                        game.player.directionY = 2;
                        break;
                }
            }
        });
        // to control the movements with arrows , press continuously
        document.addEventListener("keyup", (event) => {
            event.preventDefault();
            const key = event.key;
            const possibleKeystrokes = ["ArrowUp", "ArrowDown"];
            if (possibleKeystrokes.includes(key)) {
                switch (key) {
                    case "ArrowUp":
                        game.player.directionY = -2;
                        break;
                    case "ArrowDown":
                        game.player.directionY = 2;
                        break;
                }
            }
        });
    }

    playBtn.addEventListener("click", function () {
        gameSound.play();
        startGame();
    });
    intructionsBtn.addEventListener("click", function () {
        intructionsScreen.style.display = "block";
    });
    exitInstrBtn.addEventListener("click", function () {
        intructionsScreen.style.display = "none";
    });
    restartBtn.addEventListener("click", () => {
        location.reload(); /* in order to not create new instances instead of startGame() / directs to start screen */
    });
});
