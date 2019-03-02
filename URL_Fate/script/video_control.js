var options = {
    controls: true,
    autoplay: false,
    preload: "auto",
    loop: false,

    poster: "images/Fate_video.jpg",
    sources:[{
        src:'video/fate_Aimer.mp4',
        type:'video/mp4'
    }],

    controlBar: {
        CaptionsButton: false,
        ChaptersButton: false,
        PlaybackRateMenuButton: false,
        LiveDisplay: false,
        SubtitlesButton: false,
        RemainingTimeDisplay: false,
        ProgressControl: false,
        VolumeMenuButton: {
            inline: false,
            vertical: true
        },
        FullscreenToggle: false
    }
};

var player = videojs('media', options, function onPlayerReady() {
    videojs.log('播放器已经准备好了!');
    this.on('ended', function() {
        videojs.log('播放结束了!');
    });
});
