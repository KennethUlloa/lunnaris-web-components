import { formatTime, createElement } from "../utils/utils.js";
import { Slidebar } from "../slider/slider.js";
import { icons } from "../icons/lunnaris-icons.js";

function createIconButton(icon) {
    let btn = createElement('button','button');
    btn.innerHTML = icon;
    return btn;
};


export class VideoPlayer {
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
        this._videoPlayer.appendChild(this.floatinPlay); //Floating button Play
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
            loading.classList.toggle('hidden', true); //Loading logic
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

    render(element) {
        var _temp = document.getElementById(element);
        _temp.appendChild(this._videoPlayer);
    }

    get root() {
        return this._videoPlayer;
    }

    get videoElement() {
        return this._video;
    }
}