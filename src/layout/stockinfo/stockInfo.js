import * as Renderer from "../../logic/renderer.js";
import {httpGet} from "../../logic/httpLogic.js";
import * as Importer from "../../logic/importer.js";
Importer.importCss('./src/layout/stockinfo/stockInfo.css');

export const selfSelector = '#stock-info';

export function render(stockInfoLoaded) {
    const stock = {
        name: 'Apple inc.',
        id: 'AAPL',
        oldPrice: 37.68
    };

    renderLoading();
    httpGet(`https://finnhub.io/api/v1/quote?symbol=${stock.id}&token=bv5phhn48v6r8nt3o8i0`)
        .then((res) => {
            renderBaseState(stock.name, res.c, stock.oldPrice);
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

function renderBaseState(stockName, stockPrice, stockOldPrice) {
    const template =
        `<div class="await-style stock-info-container">
            <div><b>${stockName}</b> stock is <b>$${Math.round(stockPrice * 100) / 100}</b></div>
            <div class="stock-info-container__result">If you bought it <b>two</b> years ago you would get <b>x${Math.round(stockPrice/stockOldPrice)}</b> profit</div>
        </div>`;

    Renderer.render(selfSelector, template)
}