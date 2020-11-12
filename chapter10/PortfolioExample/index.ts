import FixedStockExchangeStub from './FixedStockExchangeStub';
import Portfolio from './Portfolio';
import TokyoStockExchange from './TokyoStockExchange';

const tokyoExchange = new TokyoStockExchange();
const portfolio = new Portfolio(tokyoExchange); // INJEÇÃO DE DEPENDÊNCIA
portfolio.add(2, 'CHING');
console.log('TOKYO EXCHANGE WITH 2 STOCKS:', portfolio.value().toFixed(2));

const fixedStockExchange = new FixedStockExchangeStub();
fixedStockExchange.fix('MSFT', 100);
const portfolioFixed = new Portfolio(fixedStockExchange);
portfolioFixed.add(2, 'AMBEV');
console.log('FIXED EXCHANGE WITH 2 STOCKS:', portfolioFixed.value().toFixed(2));
