export function supportsTouch() {
    return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
}

export class TouchHandler {
    constructor(element, vUmbral = 0.2, hUmbral = 0.2) {
        this.start = [0,0];
        this.end = [0,0];
        this.vMax = 1;
        this.hMax = 1;
        this._hAction = () => {};
        this._vAction = () => {};

        element.addEventListener('touchstart', (e) => {
            this.hMax = e.target.getBoundingClientRect().height;
            this.vMax = e.target.getBoundingClientRect().width;
            var touches = e.changedTouches;
            for(var i = 0 ; i < touches.length ; i++) {
                this.start = [touches[i].clientX, touches[i].clientY];
            }
        });

        element.addEventListener('touchmove', (e) => {e.preventDefault()});

        element.addEventListener('touchend', (e) => {
            this.hMax = e.target.getBoundingClientRect().width;
            this.vMax = e.target.getBoundingClientRect().height;
            var touches = e.changedTouches;
            for(var i = 0 ; i < touches.length ; i++) {
                this.end = [touches[i].clientX, touches[i].clientY];
                if( Math.abs(this.end[0] - this.start[0])/this.hMax >= hUmbral) {
                    this._hAction(e);
                }

                if( Math.abs(this.end[1] - this.start[1])/this.vMax >= vUmbral) {
                    this._vAction(e);
                }
            }
        });

        element.addEventListener('touchcancel', (e) => {
            this.hMax = e.target.getBoundingClientRect().height;
            this.vMax = e.target.getBoundingClientRect().width;
            var touches = e.changedTouches;
            for(var i = 0 ; i < touches.length ; i++) {
                this.end = [touches[i].clientX, touches[i].clientY];
                if( Math.abs(this.end[0] - this.start[0])/this.hMax >= hUmbral) {
                    this._hAction(e);
                }

                if( Math.abs(this.end[1] - this.start[1])/this.vMax >= vUmbral) {
                    this._vAction(e);
                }
                
            }
        });
    }

    set horizontalAction(action) {
        this._hAction = action;
    }

    set verticalAction(action) {
        this._vAction = action;
    }

    get horizontal() {
        return (this.end[0] - this.start[0])/this.hMax;
    }

    
    get vertical() {
        return (this.end[1] - this.start[1])/this.vMax;
    }

    get startPoint() {
        return this.start;
    }

    get endPoint() {
        return this.end;
    }
}

