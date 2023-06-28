window.addEventListener("load", () => {
    const playBtn = document.querySelector(".play-btn");
    const restartBtn = document.querySelector(".restart-btn");

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
                        game.player.directionY = -3;
                        break;
                    case "ArrowDown":
                        game.player.directionY = 3;
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
                        game.player.directionY = -3;
                        break;
                    case "ArrowDown":
                        game.player.directionY = 3;
                        break;
                }
            }
        });
    }

    playBtn.addEventListener("click", function () {
        startGame();
    });
    restartBtn.addEventListener("click", () => {
        location.reload(); /* in order to not create new instances instead of startGame() / directs to start screen */
    });
});
