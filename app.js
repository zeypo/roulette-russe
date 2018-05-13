'use strict';

const dashButton = require('node-dash-button');
const dash = dashButton('50:f5:da:92:cc:38', null, null, 'all');
const devices = require('./my-connect-tv.js');
const medias = [
    // Never gonna give
    'https://ia600205.us.archive.org/14/items/RickAstleyNeverGonnaGiveYouUp_201603/Rick%20Astley%20-%20Never%20Gonna%20Give%20You%20Up.mp4',
    // Bunny
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4'
]

dash.on('detected', () => {
    var urlMedia = medias[Math.floor(Math.random()*medias.length)];

    console.log(urlMedia);

    if (devices.shield && devices.shield.close) {
        //devices.shield.pause(() => {
            devices.shield.play(urlMedia, 0);
        //})
    }
    else if (devices.shield) {
        devices.shield.play(urlMedia, 0);
    }
});
