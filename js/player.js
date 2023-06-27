class Player {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 140;
        this.height = 180;
        this.top = 500;
        this.left = 20;

        // added to make the player move on the axis Y
        this.directionY = 0;

        // create element
        this.element = document.createElement("img"); //Create the img in HTML
        this.element.src = " ./images/player-froggy.png"; //Create the src attribute
        this.gameScreen.appendChild(this.element); // Insert the element in div

        // change the styling
        this.element.style.position = "absolute"; //important position to absolute
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
    }
    move() {
        // Update player's frog's position based on directionY
        this.top += this.directionY;

        // Ensure the player's frog stays within the game screen
        // handles top side
        if (this.top < 90) {
            this.top = 90;
        }
        // handles bottom side
        if (this.top > this.gameScreen.offsetHeight - this.height - 90) {
            this.top = this.gameScreen.offsetHeight - this.height - 90;
        }
        // Update the player's frog position on the screen
        this.updatePosition();
    }
    updatePosition() {
        this.element.style.top = `${this.top}px`;
    }
}
