var options = {
    autoplay: true,
    controls: true,
    loop: false,
    muted: false,
    playbackRates: [0.5, 1, 1.5, 2]
};

var player = videojs('media', options, function onPlayerReady() {
    videojs.log('播放器已经准备好了!');

    // In this context, `this` is the player that was created by Video.js.<br>  // 注意，这个地方的上下文， `this` 指向的是Video.js的实例对像player
    //this.play();

    // How about an event listener?<br>  // 如何使用事件监听？
    this.on('ended', function() {
        videojs.log('播放结束了!');
    });
});
