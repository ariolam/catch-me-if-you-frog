class Player {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 140;
        this.height = 180;
        this.top = 510;
        this.left = 7;

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
}
