export function importCss(url) {
    document.head.innerHTML += `<link type="text/css" rel="stylesheet" href=${url}>`;
}