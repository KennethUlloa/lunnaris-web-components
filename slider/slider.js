import { createElement } from "../utils/utils.js";

export class Slidebar{
    constructor(value = 0.5, min = 0.0, max = 1.0){
        this._value = value;
        this._min = min;
        this._max = max;
        this._slidebar = createElement('div', 'slidebar');
        this._bar = createElement('div', 'bar');
        this._thumb = createElement('div', 'thumb');
        this._onchange = () => {};
        this._slidebar.appendChild(this._bar);
        this._slidebar.appendChild(this._thumb);
        this.mouseDown = false;
        /*Events
        -- When the user clicks a point over the bar*/
        this._bar.addEventListener('click', (e) => {
            this.input(e);
            this._onchange(); 
        })
    }

    set value(val) {
        const nVal = Math.min(Math.max(this._min, val), this._max);
        this._value = nVal;
        const percent = (this._value - this._min)/(this._max - this._min);
        this._slidebar.style.setProperty('--comp-slidebar-value', percent);
    }

    get value(){
        return this._value;
    }

    get range(){
        return this._max - this.min;
    }

    get max(){
        return this._max;
    }

    get min(){
        return this._min;
    }

    get root() {
        return this._slidebar;
    }

    input(e) {
        const rect = this._bar.getBoundingClientRect();
        const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
        this.value = percent * (this._max - this._min);
        
    }

    render(element) {
        var _temp = document.getElementById(element);
        _temp.appendChild(this._slidebar);
    }

    set onchange(funct){
        if(funct !== undefined || funct !== null){
            this._onchange = funct;
        }
    }
}