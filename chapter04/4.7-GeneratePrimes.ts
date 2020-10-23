class GeneratePrimes {
    static generatePrimes(maxValue: number) {
        if (maxValue >= 2) {
            const s = maxValue + 1
            const f = Array<boolean>(s).fill(true);
            
            let i : number;
            for (i = 0; i < s; i++) f[i] = true;
                
            f[0] = f[1] = false;

            let j : number;
            for (i = 2; i < Math.sqrt(s) + 1; i++) {
                if (f[i]) {
                    for (j = 2 * i; j < s; j += i) {
                        f[j] = false
                    }
                }
            }

            let count = 0;
            for (i = 0; i < s; i++) {
                if (f[i]) count++;
            }

            const primes = Array<number>(count).fill(0);

            for (i = 0, j =0; i < s; i++) {
                if (f[i]) {
                    primes[j++] = i;
                }
            } 

            return primes;
        } else {
            return []
        }
    }
}

