class GuessingGame {

    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {  
        this.mid =  Math.ceil(this.max / 2 + this.min / 2);
        return this.mid;
    }

    lower() {
        this.setRange(this.min, this.mid);
    }

    greater() {
        this.setRange(this.mid, this.max);
    }
}

module.exports = GuessingGame;