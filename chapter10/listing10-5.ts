import util from 'util';

class PrintPrimes {
    static main() {
        const M = 1000;
        const RR = 50;
        const CC = 4;
        const WW = 10;
        const ORDMAX = 30;
        let P = new Array<number>(M + 1);
        let PAGENUMBER: number;
        let PAGEOFFSET;
        let ROWOFFSET;
        let C;
        let J;
        let K;
        let JPRIME;
        let ORD;
        let SQUARE;
        let N;
        let MULT = new Array<number>(ORDMAX + 1);

        J = 1;
        K = 1;
        P[1] = 2;
        ORD = 2;
        SQUARE = 9;

        while (K < M) {
            do {
                J = J + 2;
                if (J === SQUARE) {
                    ORD = ORD + 1;
                    SQUARE = P[ORD] * P[ORD];
                    MULT[ORD - 1] = J;
                }
                N = 2;
                JPRIME = true;
                while (N < ORD && JPRIME) {
                    while (MULT[N] < J) {
                        MULT[N] = MULT[N] + P[N] + P[N];
                    }
                    if (MULT[N] === J) {
                        JPRIME = false;
                    }
                    N = N + 1;
                }
            } while (!JPRIME);

            K = K + 1;
            P[K] = J;
        }
        PAGENUMBER = 1;
        PAGEOFFSET = 1;
        while (PAGEOFFSET <= M) {
            console.log(
                'The First ' + M + ' Prime Numbers ---- Page ' + PAGENUMBER + ''
            );
            console.log('');
            for (
                ROWOFFSET = PAGEOFFSET;
                ROWOFFSET < PAGEOFFSET + RR;
                ROWOFFSET++
            ) {
                for (C = 0; C < CC; C++) {
                    if (ROWOFFSET + C * RR <= M) {
                        process.stdout.write(
                            P[ROWOFFSET + C * RR].toString().padEnd(10, ' ')
                        );
                    }
                }
                console.log('');
            }
            console.log('\f');
            PAGENUMBER = PAGENUMBER + 1;
            PAGEOFFSET = PAGEOFFSET + RR * CC;
        }
    }
}

PrintPrimes.main();
