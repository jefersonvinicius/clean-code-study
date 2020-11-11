import Stock from './Stock';
import StockExchange from './StockExchange';

class Portfolio {
    private exchange: StockExchange;
    private stocks: Array<Stock> = [];

    constructor(exchange: StockExchange) {
        this.exchange = exchange;
    }

    value() {
        return this.exchange.currentPrice();
    }

    add(amount: number, stock: Stock) {}
}

export default Portfolio;
