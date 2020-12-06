export function httpGet(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", addTime(url), true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.statusText);
                }
            }
        };
        xhr.onerror = function (e) {
            reject(xhr.statusText);
        };
        xhr.send(null);
    });
}

function addTime(url) {
    if (url.includes('?')) {
        return url + `&${new Date().getTime()}`
    } else {
        return url + `?${new Date().getTime()}`
    }
}