const playIcon = `play.svg`
const pauseIcon = `pause.svg`
const expandIcon = `expand.svg`
const minimizeIcon = `minimize.svg`
const volumeIcon = `volume.svg`
const muteIcon = `mute.svg`
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

function createIconButton(icon, className=null){
    var button = createElement('button', className);
    fetch(`video/${icon}`).
    then(response => response.text())
    .then(icon => {
        button.innerHTML = icon;
    }).catch(error =>{
        var img = createElement('img');
        img.src = `video/${icon}`;
        button.appendChild(img);
    });
    
    return button;
}

function formatTime(time) {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);

    if (hours === 0){
        return `${minutes}:${decimalFormatter.format(seconds)}`
    }else{
        return `${hours}:${decimalFormatter.format(minutes)}:${decimalFormatter.format(seconds)}`
    }

}

class Slidebar{
    constructor(value = 0.5, min = 0.0, max = 1.0){
        this._value = value;
        this._min = min;
        this._max = max;
        //Declaration
        this._slidebar = createElement('div', 'slidebar');
        this._bar = createElement('div', 'bar');
        this._thumb = createElement('div', 'thumb');
        this._onchange = () => {};
        //Structure
        this._slidebar.appendChild(this._bar);
        this._slidebar.appendChild(this._thumb);
        this.mouseDown = false;
        //Events
        // -- When the user clicks a point over the bar
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

class VideoPlayer {
    constructor(video, fromUrl = false){
        //Declaration
        if(fromUrl){
            this._video = document.createElement('video');
            this._video.src = video;
        }else {
            this._video = video;
        }
        
        this._videoPlayer = createElement('div', 'videoplayer'); //root
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
        this._play = createIconButton(playIcon, 'button');
        this._pause = createIconButton(pauseIcon, 'button');
        this._expand = createIconButton(expandIcon, 'button');
        this._minimize = createIconButton(minimizeIcon, 'button');
        this._mute = createIconButton(muteIcon, 'button');
        this._volume = createIconButton(volumeIcon, 'button');
        this._volumebar = new Slidebar(0.5, 0, 1);
        var loading = createElement('div', 'loadingItem');
        loading.appendChild(createElement('div'));
        loading.appendChild(createElement('div'));
        loading.appendChild(createElement('div'));
        this._topPanel = createElement('div', 'panel top');
        this.timePreview = createElement('div', 'timePreview');

        //Structure
        this._videoPlayer.appendChild(this._video);
        this._videoPlayer.appendChild(this.controlsPane);
        this._videoPlayer.appendChild(loading);
        this._videoPlayer.appendChild(this._topPanel);

        //controlsPane children
        this.controlsPane.appendChild(this.timelineContainer);
        //timelineContainer children
        this.timelineContainer.appendChild(timeline);
        this.timelineContainer.appendChild(thumb);
        this.timelineContainer.appendChild(this.timePreview);
        //
        this.controlsPane.appendChild(_time);
        //time children
        _time.appendChild(this._currentTime);
        _time.appendChild(this._duration);
        //controlsPane
        this.controlsPane.appendChild(_buttons);
        //Buttons
        _buttons.appendChild(_panel1);
        _panel1.appendChild(this._play);
        _panel1.appendChild(this._pause);
        var volPane = createElement('div', 'vol-pane');

        volPane.appendChild(this._mute);
        volPane.appendChild(this._volume);
        volPane.appendChild(this._volumebar.root);
        _panel1.appendChild(volPane);
        //Buttons
        _buttons.appendChild(_panel2);
        _panel2.appendChild(this._expand);
        _panel2.appendChild(this._minimize);


        //events
        /* Play-pause logic */
        this._play.addEventListener('click', ()=> {this.togglePlay();})

        this._pause.addEventListener('click', ()=> {this.togglePlay();})

        /* Mute-unmute logic */
        this._mute.addEventListener('click', ()=> {this.toggleMute();})

        this._volume.addEventListener('click', ()=> {this.toggleMute();})
        
        /* Progress update */
        this._video.addEventListener('timeupdate', () => {this.updateVideoProgress();});

        /* Metadata ready */
        this._video.addEventListener('loadedmetadata', () => {this.loadVideoTime();});
        this._video.addEventListener('durationchange', () => {this.loadVideoTime();});

        this._video.addEventListener('canplay', () => {this.loadVideoTime();
            loading.classList.toggle('hidden', true); //Loading logic
        });

        /* Loading animation */
        this._video.addEventListener('loadstart', ()=>{loading.classList.toggle('hidden', true);})

        this._video.addEventListener('waiting', ()=>{
            loading.classList.toggle('hidden', false);
        });

        /* Selected time */
        this.timelineContainer.addEventListener('click', (e) => {this.handleSelectTime(e);})
        
        /* Fullscreen */
        this._expand.addEventListener('click', () => {this.toggleFullscreen()})
        this._minimize.addEventListener('click', () => {this.toggleFullscreen()})
        var timeout;
        this._videoPlayer.addEventListener('mousemove', () =>{
            this.unhideControls();
            clearTimeout(timeout);
            timeout = setTimeout(()=>{this.hideControls()}, 1000);
        })

        document.addEventListener('fullscreenchange', ()=>{
            this.checkFullScreen();
        })

        /* Volume logic */

        this._volumebar.onchange = () => {
            this._video.volume = this._volumebar.value;
            console.log(this._video.volume);
        }

        /* Time preview */
        this.timelineContainer.addEventListener('mousemove', (e) => {this.timePreviewUpdate(e);});

        //Init state
        this._pause.classList.toggle('hidden', true);
        this._mute.classList.toggle('hidden', true);
        this._minimize.classList.toggle('hidden', true);
        this._videoPlayer.style.setProperty('--video-progress', 0);
        this._volumebar.value = 0.5;
        loading.classList.toggle('hidden', true);
        this.timePreview.textContent = "-:--";
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
            this._pause.classList.toggle('hidden', false);
            this._play.classList.toggle('hidden', true);
        }else{
            this._video.pause();
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
        if(document.fullscreenElement == null){//Not fullscreen currently
            this._videoPlayer.requestFullscreen(); //Fullscreen requested
        }else{ //Fullscreen currently
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

    render(element) {
        var _temp = document.getElementById(element);
        _temp.appendChild(this._videoPlayer);
    }
}