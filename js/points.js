class Points {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.right = Math.floor(
            Math.random() * 300 + 70
        ); /* execute on the half of the width of the screen, to be in the screen */
        this.top = Math.floor(Math.random() * 700 + 70);
        this.width = 85;
        this.height = 90;

        this.element = document.createElement("img");
        this.element.src = "./images/fly.png";
        this.gameScreen.appendChild(this.element);

        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.right = `${this.right}px`;
    }
    move() {
        //Move the point to the left by 3px
        this.right += 3;
        // Update the point's position on the screen
        this.updatePosition();
    }
    updatePosition() {
        // Update the point's position based on the properties left
        this.element.style.right = `${this.right}px`;
        this.element.style.top = `${this.top}px`;
    }
}
