import Portfolio from './Portfolio';
import TokyoStockExchange from './TokyoStockExchange';

const tokyoExchange = new TokyoStockExchange();

const portfolio = new Portfolio(tokyoExchange);
console.log(portfolio.value());
