import * as Renderer from '../logic/renderer.js'
import * as StockInfo from "../layout/stockinfo/stockInfo.js";

export const selfSelector = '#layout';

export function render() {
    const template =
        `<div>
            <div id="stock-info"></div>
        </div>`;

    Renderer.render(selfSelector, template, [
        //Renderer.event(`${selfSelector} button`, 'click', onBtnClick)
    ]);
    StockInfo.render();
}

render();