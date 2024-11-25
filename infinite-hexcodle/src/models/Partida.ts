export default class Partida {
    public secret: string;
    public guesses: string[];
    public gameOver: boolean;


    constructor() {
        this.secret = this.generateSecret();
        this.guesses = [];
        this.gameOver = false;
    }


    public generateSecret() {
        let code : string = "#";
        const hex = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        for (let i = 0; i < 6; i++) {
            code+=(hex[Math.floor(Math.random() * hex.length)]);
        }
        return code;
    }


    public guess(guess: string) {
        this.guesses.push(guess);
        if (this.guesses.length > 5) {
            this.gameOver = true;
            return false;
        }

        for (let i = 0; i < this.secret.length; i++) {
            if (this.secret[i] != guess.charAt(i)) {
                return false;
            }
        }
        
        return true;
    }
}