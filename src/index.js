import { data } from "./utils/url";
import { ServiceUtil } from "./utils/service";
import { Util } from "./utils/util";
import { TemplateUtil } from "./templates/item";
import "./styles/style.css";

const request = new ServiceUtil();
const tpl = new TemplateUtil();
const util = new Util();

const getResponse = res => {
    res = JSON.parse(res);
    util.convertNodeFromString(document.getElementById("main"), tpl.item(res));
    util.bindEvents(document.getElementById("main"), onButtonClick);
};

const onButtonClick = e => {
    console.log(`clicked`, e.currentTarget.parentNode);
};

window.onload = () => {
    request.get(data.longData, {}, getResponse);
};
