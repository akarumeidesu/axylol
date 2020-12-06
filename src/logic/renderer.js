export function render(selector, innerHTML, events) {
    try {
        let root = document.querySelector(selector);
        root.innerHTML = innerHTML;

        if(events) {
            events.forEach(e => {
                root.querySelector(e.selector).addEventListener(e.name, e.callback, false)
            })
        }
    } catch (e) {
        console.error(e)
    }
}

export function event(selector, name, callback) {
    return {
        selector,
        name,
        callback
    }
}