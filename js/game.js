class Game {
    constructor() {
        //store information about the game
        this.startScreen = document.querySelector(".start-screen");
        this.gameScreen = document.querySelector(".game-screen");
        this.gameoverScreen = document.querySelector(".gameover-screen");
        this.height = 900; /* to show the game, the div will never appear as it is 0 */
        this.width = 1500;

        // added
        this.player = new Player(this.gameScreen);
        this.points = [];
    }

    start() {
        // * Game *
        // Set the height and width of the game screen
        this.gameScreen.style.height = `${this.height}px`; /* covert into string in JS */
        this.gameScreen.style.width = `${this.width}px`;

        // Hide the start screen
        this.startScreen.style.display = "none";
        // Show the game screen
        this.gameScreen.style.display = "block";

        // Start the game loop
        this.gameLoop();
    }
    gameLoop() {
        this.update();
        if (Math.random() > 0.98) {
            this.points.push(new Points(this.gameScreen));
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    update() {
        console.log("Update");
        this.player.move();
        this.points.forEach((points) => {
            points.move();
        });
    }
}
