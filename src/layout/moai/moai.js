import * as Renderer from "../../logic/renderer.js";
import * as Importer from "../../logic/importer.js";
Importer.importCss('./src/layout/moai/moai.css');

export const selfSelector = '#moai';

export function render() {
    const template = `
        <div class="await-style moai-container">
            <p class="moai-container__thought">${letsThink()}</p>
            <img class="moai-container__ebalo" src="src/img/moai.png" alt="">            
        </div>`;
    Renderer.render(selfSelector, template)
}

function letsThink() {
    return ideas[Math.floor(Math.random() * ideas.length)];
}

const ideas = [
    'Are you serious?',
    'Why is this happening to me?',
    'I didn\'t really want to..',
    'Oh shit!',
    'I could become a millionaire!',
];