export class Util {
    constructor() {}
    convertNodeFromString(node, string) {
        let frag = document.createDocumentFragment(),
            tmp = document.createElement("body"),
            child;

        tmp.innerHTML = string;

        while ((child = tmp.firstChild)) {
            frag.appendChild(child);
        }
        node.appendChild(frag);

        frag = tmp = null;
    }
    bindEvents(node, fn) {
        let nodes = node.querySelectorAll(".bind");

        for (let i = 0; i < nodes.length; i++) {
            nodes[i].addEventListener("click", fn);
        }
    }
}
