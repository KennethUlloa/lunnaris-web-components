import { createElement } from '../utils/utils.js';

function createButtonOption(text, type, callback) {
    let btn = createElement('button','ln-notify-btn ' + type);
    btn.textContent = text;
    btn.addEventListener('click', callback, false);
    return btn;
}

export class NotifyButton {
    static primary(text, callback = null) {
        return {
            text: text,
            type: 'primary',
            callback: callback
        }
    }

    static secondary(text, callback = null) {
        return {
            text: text,
            type: 'secondary',
            callback: callback
        }
    }
}

export class Notify {
    constructor(title, body, options) {
        this._title = title;
        this._body = body;
        this._options = options;

        this._root = createElement('div','ln-notify');
        this.root.innerHTML = `<h4 class="ln-notify-title">${this._title}</h4>
        <p class="ln-notify-body">${this._body}</p>`;

        let footer = createElement('div','ln-notify-footer');
        options.forEach(op => {
            footer.appendChild(createButtonOption(op.text, op.type, this.#wrapCallback(op.callback)));
        })

        this._root.appendChild(footer);
    }

    get root() {
        return this._root;
    }

    hide() {
        this._root.classList.toggle('hidden', true);
    }

    #wrapCallback(callback) {
        return (e) => {
            this.hide();
            if(callback !== null && callback !== undefined){
                callback(e);
            }
        }
    }

    show() {
        this._root.classList.toggle('hidden', false);
    }

    set floating(isFloat) {
        this._root.classList.toggle('floating', isFloat);
    }
}