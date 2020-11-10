import RowColumnPagePrinter from './listing10-7';
import PrimeGenerator from './listing10-8';

export default class PrimePrinter {
    static printPrimes() {
        const NUMBER_OF_PRIMES = 1000;
        const primes = PrimeGenerator.generate(NUMBER_OF_PRIMES);

        const ROWS_PER_PAGE = 50;
        const COLUMNS_PER_PAGE = 4;
        const tablePrinter = new RowColumnPagePrinter(
            ROWS_PER_PAGE,
            COLUMNS_PER_PAGE,
            'The First ' + NUMBER_OF_PRIMES + ' Prime Numbers'
        );

        tablePrinter.print(primes);
    }
}

PrimePrinter.printPrimes();
