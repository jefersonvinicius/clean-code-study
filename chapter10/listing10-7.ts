export default class RowColumnPagePrinter {
    private rowsPerPage: number;
    private columnsPerPage: number;
    private numbersPerPage: number;
    private pageHeader: string;

    constructor(
        rowsPerPage: number,
        columnsPerPage: number,
        pageHeader: string
    ) {
        this.rowsPerPage = rowsPerPage;
        this.columnsPerPage = columnsPerPage;
        this.pageHeader = pageHeader;
    }
}
