class Stock {
    private id: string;
    private price: number;
    private symbol: string;

    constructor(price: number, symbol: string) {
        this.id = Math.random().toString();
        this.price = price;
        this.symbol = symbol;
    }
}

export default Stock;
