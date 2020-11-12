import StockExchange from './StockExchange';

class StockPurchased {
    symbol = '';
    amount = 0;

    constructor(symbol: string, amount: number) {
        this.symbol = symbol;
        this.amount = amount;
    }
}

class Portfolio {
    private exchange: StockExchange;
    private stocks: Array<StockPurchased> = [];

    /**
     *
     * Essa classe depende de uma interface, isso facilita caso for trocar a implementação e
     * para criar mocks quando for realizar testes
     */
    constructor(exchange: StockExchange) {
        this.exchange = exchange;
    }

    value() {
        const totalAmount = this.stocks.reduce((total, stock) => {
            return total + stock.amount;
        }, 0);
        return this.exchange.currentPrice() * totalAmount;
    }

    add(amount: number, symbol: string) {
        if (this.stockAlreadyPurchased(symbol)) {
            const index = this.stocks.findIndex((stock) => stock.symbol === symbol);
            this.stocks[index].amount += amount;
        } else {
            this.stocks.push(new StockPurchased(symbol, amount));
        }
    }

    private stockAlreadyPurchased(symbol: string) {
        return !!this.stocks.find((stock) => stock.symbol === symbol);
    }
}

export default Portfolio;
