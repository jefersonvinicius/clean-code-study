class PrimeGenerator {
    private static crossedOut : boolean[];
    private static result : number[]

    static generatePrimes(maxValue : number) {
        if (maxValue < 2) {
            return [];
        } else {
            this.uncrossIntegersUpTo(maxValue)
            this.crossOutMultiples()
            this.putUncrossedIntegersIntoResult()
            return this.result;
        }
    }

    private static uncrossIntegersUpTo(maxValue : number) {
        this.crossedOut = new Array(maxValue + 1);
        for (let i = 2; i < this.crossedOut.length; i++) {
            this.crossedOut[i] = false;
        }
    }

    private static crossOutMultiples() {
        const limit = this.determineInterationLimit();
        for (let i = 2; i <= limit; i++) {
            if (this.notCrossed(i)) {
                this.crossOutMultiplesOf(i);
            }
        }
    }

    private static determineInterationLimit() {
        // Every multiple in the array has a prime factor that
        // is less than or equal to the root of the array size,
        // so we don't have cross out multiples of numbers
        // larger than that root
        const iterationLimit = Math.sqrt(this.crossedOut.length);
        return Math.floor(iterationLimit)
    }

    private static crossOutMultiplesOf(i : number) {
        for (let multiple = 2 * i; multiple < this.crossedOut.length; multiple += i) {
            this.crossedOut[multiple] = true;
        }
    }

    private static notCrossed(i : number) {
        return this.crossedOut[i] === false;
    }

    private static putUncrossedIntegersIntoResult() {
        this.result = new Array(this.numberOfUncrossedIntegers());
        for(let j = 0, i = 2; i < this.crossedOut.length; i++) {
            if (this.notCrossed(i)) {
                this.result[j++] = i
            }
        }
    }

    private static numberOfUncrossedIntegers() {
        let count = 0;
        for (let i = 0; i < this.crossedOut.length; i++) {
            if (this.notCrossed(i)) {
                count++;
            }
        }
        return count;
    }

}

console.log(GeneratePrimes.generatePrimes(1000))