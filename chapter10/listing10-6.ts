import RowColumnPagePrinter from './listing10-7';

export default class PrimePrinter {
    static printPrimes() {
        const ROWS_PER_PAGE = 40;
        const COLUMNS_PER_PAGE = 4;
        const data = [1, 2, 3, 45, 4, 67, 8, 798, 4, 54, 56, 421, 5, 45, 6, 7, 8, 456, 4, 654, 230];
        const tablePrinter = new RowColumnPagePrinter(ROWS_PER_PAGE, COLUMNS_PER_PAGE, 'HEADER');

        tablePrinter.print(data);
    }
}

PrimePrinter.printPrimes();
