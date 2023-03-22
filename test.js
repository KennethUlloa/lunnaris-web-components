import {VideoPlayer, Slidebar} from './lunnaris-condensed.js'

var videoPlayer = new VideoPlayer('video/Demo.mp4', true);
videoPlayer.render('root');
var slider = new Slidebar();
slider.render('slider-1');