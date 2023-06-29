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

        //score
        this.score = document.querySelector(".score-status");
        this.scoreNumber = document.querySelector(".score-number");
        this.totalScore = document.querySelector(".total-score");
        this.gameoverMessage = document.querySelector(".gameover-message");
        this.scoreCounter = 0;
        this.scoreNumber.innerHTML = 0;
        this.gameoverMessage.innerText = "";
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

        // start timer
        setTimeout(() => {
            this.gameScreen.style.display = "none";
            this.gameoverScreen.style.display = "block";
            this.totalScore.innerText = `Score: ${this.scoreCounter}`;

            //gameover messages
            if (this.scoreCounter <= 10) {
                this.gameoverMessage.innerText =
                    "Froggy is still starving! Try again!";
            } else if (this.scoreCounter > 10) {
                this.gameoverMessage.innerText =
                    "You made it! Froggy is ready to start the bootcamp!";
            }
        }, 20000);

        // Start the game loop
        this.gameLoop();
    }
    gameLoop() {
        this.update();
        if (Math.random() > 0.98) {
            // && this.points.length < 0.98
            this.points.push(new Points(this.gameScreen));
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    update() {
        this.player.move();
        const pointsTokeep = [];
        this.points.forEach((points) => {
            points.move();
            if (this.player.didCollide(points)) {
                points.element.remove();
                this.scoreCounter += 1;
                this.scoreNumber.innerHTML = `${this.scoreCounter}`;
            } else {
                pointsTokeep.push(points);
            }
        });
        this.points = pointsTokeep;
        console.log(this.scoreCounter);
    }
}
