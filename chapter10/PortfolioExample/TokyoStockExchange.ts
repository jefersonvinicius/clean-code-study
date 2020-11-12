import StockExchange from './StockExchange';

class TokyoStockExchange implements StockExchange {
    currentPrice() {
        return Math.floor(Math.random() * 1000);
    }
}

export default TokyoStockExchange;
