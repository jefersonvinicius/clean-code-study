import Stock from './Stock';
import StockExchange from './StockExchange';

export default class FixedStockExchangeStub implements StockExchange {
    private stocksSymbols: string[] = [];
    private value = 0;

    currentPrice() {
        return this.value;
    }

    fix(symbol: string, price: number) {
        this.stocksSymbols.push(symbol);
        this.value = price;
    }
}
