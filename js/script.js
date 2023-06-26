window.addEventListener("load", () => {
    const playBtn = document.querySelector(".play-btn");

    let game;

    function startGame() {
        game = new Game(); /*assign new variable to game object */
        game.start();
    }

    playBtn.addEventListener("click", function () {
        startGame();
    });
});
