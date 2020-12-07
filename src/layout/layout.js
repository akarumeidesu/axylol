import * as Renderer from '../logic/renderer.js'
import * as StockInfo from "../layout/stockinfo/stockInfo.js";
import * as Moai from "../layout/moai/moai.js";

export const selfSelector = '#layout';

export function render() {
    const template =
        `<div>
            <div id="stock-info"></div>
            <div id="moai"></div>
        </div>`;

    Renderer.render(selfSelector, template, [
        //Renderer.event(`${selfSelector} button`, 'click', onBtnClick)
    ]);
    StockInfo.render(() => {
        Moai.render();
    });
}

render();