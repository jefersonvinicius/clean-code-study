export default class RowColumnPagePrinter {
    private rowsPerPage: number;
    private columnsPerPage: number;
    private numbersPerPage: number;
    private pageHeader: string;

    constructor(rowsPerPage: number, columnsPerPage: number, pageHeader: string) {
        this.rowsPerPage = rowsPerPage;
        this.columnsPerPage = columnsPerPage;
        this.pageHeader = pageHeader;
        this.numbersPerPage = rowsPerPage * columnsPerPage;
    }

    print(data: number[]) {
        let pageNumber = 1;
        for (let firstIndexOnPage = 0; firstIndexOnPage < data.length; firstIndexOnPage += this.numbersPerPage) {
            let lastIndexOnPage = Math.min(firstIndexOnPage + this.numbersPerPage - 1, data.length - 1);
            this.printPageHeader(this.pageHeader, pageNumber);
            this.printPage(firstIndexOnPage, lastIndexOnPage, data);
            process.stdout.write('\f');
            pageNumber++;
        }
    }

    private printPage(firstIndexOnPage: number, lastIndexOnPage: number, data: number[]) {
        let firstIndexOfLastRowOnPage = firstIndexOnPage + this.rowsPerPage - 1;
        for (let firstIndexInRow = firstIndexOnPage; firstIndexInRow <= firstIndexOfLastRowOnPage; firstIndexInRow++) {
            this.printRow(firstIndexInRow, lastIndexOnPage, data);
            console.log('');
        }
    }

    private printRow(firstIndexInRow: number, lastIndexOnPage: number, data: number[]) {
        for (let column = 0; column < this.columnsPerPage; column++) {
            let index = firstIndexInRow + column * this.rowsPerPage;
            if (index <= lastIndexOnPage) {
                process.stdout.write(data[index].toString().padEnd(10, ' '));
            }
        }
    }

    private printPageHeader(pageHeader: string, pageNumber: number) {
        console.log(pageHeader + ' --- Page ' + pageNumber);
        console.log('');
    }
}
