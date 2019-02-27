export class TemplateUtil {
    constructor() {}
    item(arr) {
        let data = [];
        for (let i = 0; i < arr.length; i++) {
            data.push(`<div class='item'>
                    <span data-val="1">${arr[i].id}</span>
                    <button class="bind" data-click ="onButtonClick">Click</button>
                </div>`);
        }
        return data.join("");
    }
}
