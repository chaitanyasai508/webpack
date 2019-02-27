export class ServiceUtil {
    constructor() {}
    get(url, data, done) {
        let http = new XMLHttpRequest();
        http.onreadystatechange = function() {
            if (http.readyState === 4) {
                done(http.responseText); // call callback
            }
        };
        var kv = [];
        for (var prop in data) {
            kv.push(
                encodeURIComponent(prop) + "=" + encodeURIComponent(data[prop])
            );
        }
        url = url + (url.indexOf("?") === -1 ? "?" : "&") + kv.join("&");
        http.open("GET", url);
        http.send(null);
    }
}
