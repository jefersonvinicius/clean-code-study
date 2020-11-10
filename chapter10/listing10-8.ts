export default class PrimeGenerator {
    private static primes: number[] = [];
    private static multiplesOfPrimeFactors: number[] = [];

    static generate(n: number) {
        this.primes = new Array<number>(n);
        this.multiplesOfPrimeFactors = new Array<number>();
        this.set2AsFirstPrime();
        this.checkOddNumbersForSubsequentPrimes();
        return this.primes;
    }

    private static set2AsFirstPrime() {
        this.primes[0] = 2;
        this.multiplesOfPrimeFactors.push(2);
    }

    private static checkOddNumbersForSubsequentPrimes() {
        let primeIndex = 1;
        for (let candidate = 3; primeIndex < this.primes.length; candidate += 2) {
            if (this.isPrime(candidate)) {
                this.primes[primeIndex++] = candidate;
            }
        }
    }

    private static isPrime(candidate: number) {
        if (this.isLeastRelevantMultipleOfNextLargerPrimeFactor(candidate)) {
            this.multiplesOfPrimeFactors.push(candidate);
            return false;
        }
        return this.isNotMultipleOfAnyPreviousPrimeFactor(candidate);
    }

    private static isLeastRelevantMultipleOfNextLargerPrimeFactor(candidate: number) {
        let nextLargerPrimeFactor = this.primes[this.multiplesOfPrimeFactors.length];
        let leastRelevantMultiple = nextLargerPrimeFactor * nextLargerPrimeFactor;
        return candidate === leastRelevantMultiple;
    }

    private static isNotMultipleOfAnyPreviousPrimeFactor(candidate: number) {
        for (let n = 1; n < this.multiplesOfPrimeFactors.length; n++) {
            if (this.isMultipleOfNthPrimeFactor(candidate, n)) {
                return false;
            }
        }
        return true;
    }

    private static isMultipleOfNthPrimeFactor(candidate: number, n: number) {
        return candidate === this.smallestOddNthMultipleNotLessThanCandidate(candidate, n);
    }

    private static smallestOddNthMultipleNotLessThanCandidate(candidate: number, n: number) {
        let multiple = this.multiplesOfPrimeFactors[n];
        while (multiple < candidate) {
            multiple += 2 * this.primes[n];
        }
        this.multiplesOfPrimeFactors[n] = multiple;
        return multiple;
    }
}
