import { icons } from "./lunnaris-icons.js";

function setIcons() {
    icons.forEach((val, key) => {
        document.querySelectorAll(key).forEach(e => {
            e.innerHTML = val;
        });
    });
}

window.onload = () => {
    let link = document.createElement('link');
    link.setAttribute('rel','stylesheet');
    link.setAttribute('href','icons/lunnaris-icons.css');
    document.querySelector('head').appendChild(link);
    setIcons();
};