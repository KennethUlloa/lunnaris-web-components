 const decimalFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2
});

 function createElement(tag, className=null, type=null) {
    var element = document.createElement(tag);
    if(className !== null){
        element.className = className;
    }
    
    if(type !== null){
        element.type = type;
    }
    return element;
}
 function formatTime(time) {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);

    if (hours === 0){
        return `${minutes}:${decimalFormatter.format(seconds)}`;
    }else{
        return `${hours}:${decimalFormatter.format(minutes)}:${decimalFormatter.format(seconds)}`;
    }
}const i_back = `<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg viewBox="0 0 13.229167 13.229167" version="1.1" id="svg5" inkscape:version="1.2.1 (9c6d41e410, 2022-07-14)" sodipodi:docname="back.svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g><path id="path7738" style="fill:#ffffff;stroke:#ffffff;stroke-width:1.05833;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" d="M 4.8534505 3.5052124 L 1.7420125 6.6166504 L 4.8534505 3.5052124 z M 1.749764 6.6145833 L 11.479403 6.6145833 L 1.749764 6.6145833 z M 1.7420125 6.7050171 L 4.8534505 9.8164551 L 1.7420125 6.7050171 z "/></g></svg>`;
const i_expand = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fffff" stroke="none"><path d="M3412 5107 c-94 -35 -147 -118 -140 -222 5 -78 38 -132 105 -172 l48 -28 473 -5 472 -5 -801 -800 c-548 -547 -807 -813 -820 -840 -37 -79 -16 -187 47 -247 60 -56 156 -74 232 -43 26 11 277 256 845 823 l807 807 0 -453 c0 -293 4 -468 11 -496 29 -117 154 -186 272 -152 64 19 129 82 146 142 7 26 11 274 11 745 0 779 1 767 -63 851 -20 27 -55 54 -92 73 l-59 30 -730 2 c-548 1 -739 -1 -764 -10z"/><path d="M2085 2371 c-27 -13 -293 -272 -840 -820 l-800 -801 -5 472 -5 473 -28 48 c-39 66 -93 100 -168 105 -110 8 -201 -52 -228 -151 -9 -31 -11 -237 -9 -763 l3 -720 30 -59 c19 -37 46 -72 73 -92 84 -64 72 -63 851 -63 480 0 719 4 746 11 61 17 130 93 145 161 25 113 -43 226 -155 257 -26 7 -197 11 -495 11 l-455 0 807 808 c567 567 812 818 823 844 32 79 10 182 -51 240 -62 58 -163 75 -239 39z"/></g></svg>`;
const i_minimize = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"><path d="M4825 5105 c-22 -8 -42 -15 -45 -15 -2 0 -370 -366 -817 -812 l-813 -813 0 472 0 471 -28 53 c-40 77 -102 114 -192 114 -90 0 -152 -37 -192 -114 l-28 -53 0 -722 c0 -798 -1 -784 63 -868 20 -27 55 -54 92 -73 l59 -30 740 -3 741 -3 55 28 c75 38 112 93 118 172 2 32 -1 76 -8 96 -17 51 -85 117 -136 133 -30 9 -167 12 -505 12 l-464 0 807 808 c443 444 813 822 822 839 44 88 28 184 -43 254 -66 67 -141 84 -226 54z"/><path d="M675 2391 c-76 -34 -135 -123 -135 -201 0 -78 59 -167 135 -201 37 -17 77 -19 510 -19 l470 0 -807 -807 c-443 -445 -813 -823 -822 -840 -44 -88 -28 -184 43 -254 70 -71 166 -87 254 -43 17 9 395 379 840 822 l807 807 0 -470 c0 -434 2 -473 19 -510 65 -141 234 -177 346 -74 80 73 76 31 73 860 l-3 735 -30 59 c-19 37 -46 72 -73 92 -84 64 -70 63 -866 63 -676 0 -724 -2 -761 -19z"/></g></svg>`;
const i_mute = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"><path d="M102 5099 c-78 -39 -118 -133 -92 -215 10 -31 127 -154 603 -631 l592 -593 -56 0 c-82 0 -168 -18 -222 -48 -63 -34 -132 -109 -165 -180 l-27 -57 0 -815 0 -815 31 -65 c39 -83 101 -145 184 -184 l65 -31 468 -3 468 -3 895 -715 c492 -394 910 -722 929 -730 44 -18 87 -18 132 1 48 20 71 41 94 87 18 34 19 63 19 383 0 190 3 345 7 345 4 0 192 -184 418 -409 403 -402 411 -410 457 -416 87 -13 161 24 197 97 25 52 27 95 6 146 -22 52 -4793 4826 -4850 4853 -53 25 -100 24 -153 -2z"/><path d="M3774 5106 c-27 -12 -1584 -1245 -1641 -1300 l-23 -21 955 -955 955 -955 0 1553 c0 1504 -1 1554 -19 1590 -23 46 -46 67 -94 87 -44 18 -92 19 -133 1z"/></g></svg>`;
const i_pause = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" class="icon-img"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none" class="g"><path d="M1204 4581 c-122 -20 -232 -77 -315 -167 -59 -64 -92 -122 -118 -208 -21 -68 -21 -75 -21 -1648 l0 -1579 25 -75 c14 -41 37 -93 51 -117 64 -103 180 -192 299 -230 66 -21 88 -22 375 -22 304 0 305 0 376 26 164 60 273 169 336 335 l23 59 3 1565 c2 1105 0 1584 -8 1630 -31 184 -168 342 -354 408 -69 25 -80 26 -346 28 -151 1 -298 -1 -326 -5z"/><path d="M3329 4580 c-215 -34 -400 -212 -438 -424 -15 -83 -15 -3109 0 -3192 34 -191 188 -355 389 -416 34 -10 122 -13 345 -13 282 0 304 1 370 22 178 56 313 199 360 379 13 51 15 261 15 1624 0 1711 3 1613 -58 1738 -56 115 -182 221 -311 264 -60 19 -91 21 -341 24 -151 1 -300 -1 -331 -6z"/></g></svg>`;
const i_play = `<svg viewBox="0 0 13.229167 13.229167" version="1.1" id="svg5" inkscape:version="1.2.1 (9c6d41e410, 2022-07-14)" sodipodi:docname="play.svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs2"/><g id="layer1"><path style="stroke-width:1.5875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" id="path1012" d="m 6.8442031,5.8358231 -9.578798,-10e-8 4.789399,-8.2954823 z" transform="rotate(90,1.8714628,6.431242)"/></g></svg>`;
const i_volume = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M2846 4943 c-10 -3 -400 -310 -867 -684 l-849 -678 -442 -3 c-437 -3 -444 -3 -489 -26 -74 -36 -125 -87 -161 -160 l-33 -67 0 -765 0 -765 33 -67 c36 -73 87 -124 161 -160 45 -23 52 -23 489 -26 l442 -3 848 -678 c467 -373 859 -681 873 -684 75 -20 156 12 194 77 l25 43 0 2263 0 2263 -25 43 c-38 65 -121 97 -199 77z"/><path d="M4249 4290 c-71 -21 -119 -87 -119 -165 0 -60 7 -72 104 -180 154 -171 247 -307 337 -491 233 -478 270 -1026 103 -1533 -93 -282 -227 -509 -440 -746 -97 -108 -104 -120 -104 -180 0 -115 101 -194 212 -165 34 9 60 29 120 90 291 299 512 714 603 1135 165 764 -54 1558 -591 2134 -91 98 -149 124 -225 101z"/><path d="M3770 3807 c-77 -25 -120 -83 -120 -160 0 -62 16 -91 100 -183 225 -248 342 -556 342 -904 0 -345 -115 -652 -338 -899 -89 -100 -104 -126 -104 -186 0 -81 48 -144 125 -164 48 -12 102 -2 143 27 42 31 168 180 235 280 65 95 151 268 190 377 72 203 107 483 88 698 -34 382 -165 695 -410 982 -107 126 -170 159 -251 132z"/></g></svg>`;

 const icons = new Map();
icons.set('.ln-play',i_play);
icons.set('.ln-pause',i_pause);
icons.set('.ln-expand',i_expand);
icons.set('.ln-minimize',i_minimize);
icons.set('.ln-mute',i_mute);
icons.set('.ln-volume',i_volume);
icons.set('.ln-back',i_back);


 class Slidebar{
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



function createIconButton(icon) {
    let btn = createElement('button','button');
    btn.innerHTML = icon;
    return btn;
};


 class VideoPlayer {
    constructor(video, fromUrl = false){
        /*Declaration*/
        if(fromUrl){
            this._video = document.createElement('video');
            this._video.src = video;
        }else {
            this._video = video;
        }

        this._videoPlayer = createElement('div', 'videoplayer');
        this.controlsPane = createElement('div', 'controlsPane');
        this.timelineContainer = createElement('div', 'timelineContainer');
        var timeline = createElement('div', 'timeline');
        var thumb = createElement('div', 'thumb');
        var _time = createElement('div', 'time');
        this._duration = createElement('div','duration');
        this._currentTime = createElement('div', 'currentTime');
        var _buttons = createElement('div','buttons');
        var _panel1 = createElement('div', 'buttonPane');
        var _panel2 = createElement('div', 'buttonPane');
        this._play = createIconButton(icons.get('.ln-play'));
        this._pause = createIconButton(icons.get('.ln-pause'));
        this._expand = createIconButton(icons.get('.ln-expand'));
        this._minimize = createIconButton(icons.get('.ln-minimize'));
        this._mute = createIconButton(icons.get('.ln-mute'));
        this._volume = createIconButton(icons.get('.ln-volume'));
        this._volumebar = new Slidebar(0.5, 0, 1);
        var loading = createElement('div', 'loadingItem');
        this.floatinPlay = createIconButton(icons.get('.ln-play'));
        this.floatinPlay.classList.toggle('floatingPlay',true);
        this.floatinPlay.classList.toggle('button',false);
        loading.appendChild(createElement('div'));
        loading.appendChild(createElement('div'));
        loading.appendChild(createElement('div'));
        this._topPanel = createElement('div', 'panel top');
        this.timePreview = createElement('div', 'timePreview');
        this.isFocused = false;

        /*Structure*/
        this._videoPlayer.appendChild(this._video);
        this._videoPlayer.appendChild(this.controlsPane);
        this._videoPlayer.appendChild(loading);
        this._videoPlayer.appendChild(this.floatinPlay); 
        this._videoPlayer.appendChild(this._topPanel);

        /*controlsPane children*/
        this.controlsPane.appendChild(this.timelineContainer);
        /*timelineContainer children*/
        this.timelineContainer.appendChild(timeline);
        this.timelineContainer.appendChild(thumb);
        this.timelineContainer.appendChild(this.timePreview);
        this.controlsPane.appendChild(_time);
        /*time children*/
        _time.appendChild(this._currentTime);
        _time.appendChild(this._duration);
        /*controlsPane*/
        this.controlsPane.appendChild(_buttons);
        /*Buttons*/
        _buttons.appendChild(_panel1);
        _panel1.appendChild(this._play);
        _panel1.appendChild(this._pause);
        var volPane = createElement('div', 'vol-pane');

        volPane.appendChild(this._mute);
        volPane.appendChild(this._volume);
        volPane.appendChild(this._volumebar.root);
        _panel1.appendChild(volPane);
        /*Buttons*/
        _buttons.appendChild(_panel2);
        _panel2.appendChild(this._expand);
        _panel2.appendChild(this._minimize);
        /*events*/
        /* Play-pause logic */
        this._play.addEventListener('click', ()=> {this.togglePlay();});
        this.floatinPlay.addEventListener('click', () => {this.togglePlay();});

        this._pause.addEventListener('click', ()=> {this.togglePlay();});

        /* Mute-unmute logic */
        this._mute.addEventListener('click', ()=> {this.toggleMute();});

        this._volume.addEventListener('click', ()=> {this.toggleMute();});
        
        /* Progress update */
        this._video.addEventListener('timeupdate', () => {this.updateVideoProgress();});

        /* Metadata ready */
        this._video.addEventListener('loadedmetadata', () => {this.loadVideoTime();});
        this._video.addEventListener('durationchange', () => {this.loadVideoTime();});
        this._video.addEventListener('canplay', () => {this.loadVideoTime();
            loading.classList.toggle('hidden', true); 
        });

        /* End of video */
        this._video.addEventListener('ended', () => {
            this.floatinPlay.classList.toggle('hidden', false); 
            this._play.classList.toggle('hidden', false);
            this._pause.classList.toggle('hidden', true);
        });
        
        this._video.addEventListener('keydown', (e)=> {
            console.log(e.key);
        });
        /* Loading animation */
        this._video.addEventListener('loadstart', ()=>{loading.classList.toggle('hidden', true);});

        this._video.addEventListener('waiting', ()=>{
            loading.classList.toggle('hidden', false);
        });

        /* Selected time */
        this.timelineContainer.addEventListener('click', (e) => {this.handleSelectTime(e);});
        
        /* Fullscreen */
        this._expand.addEventListener('click', () => {this.toggleFullscreen()});
        this._minimize.addEventListener('click', () => {this.toggleFullscreen()});
        var timeout;
        this._videoPlayer.addEventListener('mousemove', () =>{
            this.unhideControls();
            clearTimeout(timeout);
            timeout = setTimeout(() => {this.hideControls()}, 1000);
        });

        document.addEventListener('fullscreenchange', ()=>{
            this.checkFullScreen();
        });

        /* Volume logic */

        this._volumebar.onchange = () => {
            this._video.volume = this._volumebar.value;
        };

        /* Time preview */
        this.timelineContainer.addEventListener('mousemove', (e) => {this.timePreviewUpdate(e);});

        /*Init state*/
        this._pause.classList.toggle('hidden', true);
        this._mute.classList.toggle('hidden', true);
        this._minimize.classList.toggle('hidden', true);
        this._videoPlayer.style.setProperty('--video-progress', 0);
        this._volumebar.value = 0.5;
        loading.classList.toggle('hidden', true);
        this.timePreview.textContent = "-:--";
        this.controlsPane.classList.toggle('hidden', true);
        this._videoPlayer.addEventListener('mouseenter', () => {this.isFocused = true});
        this._videoPlayer.addEventListener('mouseleave', () => {this.isFocused = false});
        document.addEventListener('keydown', (e)=> {
            if(this.isFocused){
                e.preventDefault();
                if(e.key === 'ArrowLeft'){
                    this.skipBackward();
                }else if(e.key === 'ArrowRight'){
                    this.skipForward();
                }else if(e.key === ' '){
                    this.togglePlay();
                }else if(e.key === 'm'){
                    this.toggleMute();
                }else if(e.key === 'ArrowUp'){
                    this.volume += 0.1; 
                }else if(e.key === 'ArrowDown'){
                    this.volume -= 0.1;
                }else if(e.key === 'f'){
                    this.toggleFullscreen();
                }
            }
        });

        this.skipValue = 0.1;

    }

    setTopPanel(content, type='string') {
        if (content !== null && content !== undefined){
            if(type === 'string'){
                this._topPanel.innerHTML = content;
            }else if (type === 'element') {
                this._topPanel.appendChild(content);
            }
        }
    }

    checkFullScreen(){
        if(document.fullscreenElement === null){
            this._minimize.classList.toggle('hidden', true);
            this._expand.classList.toggle('hidden', false);
        }else if (document.fullscreenElement === this._videoPlayer){
            this._minimize.classList.toggle('hidden', false);
            this._expand.classList.toggle('hidden', true);
        }
    }

    togglePlay(){
        if(this._video.paused){
            this._video.play();
            this.floatinPlay.classList.toggle('hidden', true);
            this._pause.classList.toggle('hidden', false);
            this._play.classList.toggle('hidden', true);
        }else{
            this._video.pause();
            this.floatinPlay.classList.toggle('hidden', false);
            this._pause.classList.toggle('hidden', true);
            this._play.classList.toggle('hidden', false);
        }
    }

    toggleMute(){
        this._video.muted = !this._video.muted;
        if(this._video.muted){
            this._mute.classList.toggle('hidden', false);
            this._volume.classList.toggle('hidden', true);
        }else {
            this._mute.classList.toggle('hidden', true);
            this._volume.classList.toggle('hidden', false);
        }
    }

    toggleFullscreen() {
        if(document.fullscreenElement == null){/*Not fullscreen currently*/
            this._videoPlayer.requestFullscreen(); /*Fullscreen requested*/
        }else{ /*Fullscreen currently*/
            document.exitFullscreen();
        }
    }

    updateVideoProgress(){
        if(!Number.isNaN(this._video.duration) && !Number.isNaN(this._video.currentTime)){
            const progress = this._video.currentTime/this._video.duration;
            this._videoPlayer.style.setProperty('--video-progress', progress);
            this._currentTime.textContent = formatTime(this._video.currentTime);
        }
    }

    handleSelectTime(e) {
        const rect = this.timelineContainer.getBoundingClientRect();
        const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
        this._video.currentTime = this._video.duration * percent;
        this.updateVideoProgress();
    }

    timePreviewUpdate(e) {
        const rect = this.timelineContainer.getBoundingClientRect();
        const cursorOffset = Math.min(Math.max(0, e.x - rect.x), rect.width);
        const percent = cursorOffset / rect.width;
        if(cursorOffset < this.timePreview.getBoundingClientRect().width/2){
            this.timePreview.classList.toggle('leftClip', true);
        }else{
            this.timePreview.classList.toggle('leftClip', false);
        }

        if(cursorOffset > rect.width - this.timePreview.getBoundingClientRect().width/2){
            this.timePreview.classList.toggle('rightClip', true);
        }else{
            this.timePreview.classList.toggle('rightClip', false);
        }
        this._videoPlayer.style.setProperty('--video-preview', percent);
        if(!Number.isNaN(this._video.duration)){
            var percentTime = this._video.duration*percent;
            this.timePreview.textContent = formatTime(percentTime);
        }
    }

    loadVideoTime(){
        if(!Number.isNaN(this._video.duration) && !Number.isNaN(this._video.currentTime)){
            this._currentTime.textContent = formatTime(this._video.currentTime);
            this._duration.textContent = formatTime(this._video.duration);
        }
    }

    hideControls() {
        if (document.fullscreenElement === this._videoPlayer){
            this._videoPlayer.style.cursor = 'none';
        }
        this.controlsPane.classList.toggle('hidden', true);
        this._topPanel.classList.toggle('hidden', true);
    }

    unhideControls() {
        this.controlsPane.classList.toggle('hidden', false);
        this._videoPlayer.style.cursor = 'default';
        this._topPanel.classList.toggle('hidden', false);
    }

    skipForward() {
        if(Number.isNaN(this._video.duration)){return;}
        this._video.currentTime += this._skipValue * this._video.duration;
    }

    skipBackward() {
        if(Number.isNaN(this._video.duration)){return;}
        this._video.currentTime -= this._skipValue * this._video.duration;
    }

    set skipValue(value) {
        this._skipValue = value;
    }

    get skipValue() {
        return this._skipValue;
    }

    set volume(value) {

        this._volumebar.value = Math.max(0, Math.min(1, value));
        this._video.volume = Math.max(0, Math.min(1, value));
    }

    get volume() {
        return this._video.volume;
    }

    render(selector) {
        var _temp = document.querySelector(selector);
        _temp.appendChild(this._videoPlayer);
    }

    get root() {
        return this._videoPlayer;
    }

    get videoElement() {
        return this._video;
    }
} function supportsTouch() {
    return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
}

 class TouchHandler {
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

