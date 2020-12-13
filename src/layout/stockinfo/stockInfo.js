import * as Renderer from "../../logic/renderer.js";
import {httpGet} from "../../logic/httpLogic.js";
import * as Importer from "../../logic/importer.js";
import {getRandomStock} from "../../logic/stocksLogic.js";
Importer.importCss('./src/layout/stockinfo/stockInfo.css');

export const selfSelector = '#stock-info';

export function render(stockInfoLoaded) {
    const stock = getRandomStock();

    renderLoading();
    httpGet(`https://finnhub.io/api/v1/quote?symbol=${stock.id}&token=bv5phhn48v6r8nt3o8i0`)
        .then((res) => {
            renderBaseState(stock, res.c);
            if (stockInfoLoaded) {
                stockInfoLoaded()
            }
        })
}

function renderLoading() {
    const template =
        `<div>
            Loading...
        </div>`;

    Renderer.render(selfSelector, template)
}

function renderBaseState(stock, currentPrice) {
    const year = new Date(stock.date).getFullYear();
    const xTimes = Math.round(currentPrice/stock.oldPrice);
    const current = Math.round(currentPrice * 100) / 100;
    const stockName = stock.name;

    const template =
        `<div class="await-style stock-info-container">
            <div><b>${stockName}</b> stock is <b>$${current}</b></div>
            <div class="stock-info-container__x-block"><b>${xTimes}x</b> profit</div>
            <div class="stock-info-container__result">if you bought it in <b>${year}</b></div>
        </div>`;

    Renderer.render(selfSelector, template)
}