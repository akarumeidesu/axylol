import {stockItems} from "./stockItems.js";

export function getRandomStock() {
    const items = stockItems;
    return items[Math.floor(Math.random() * items.length)];
}