import StockExchange from './StockExchange';

class TokyoStockExchange implements StockExchange {
    price() {
        return Math.floor(Math.random() * 1000);
    }

    currentPrice() {
        return this.price();
    }
}

export default TokyoStockExchange;
