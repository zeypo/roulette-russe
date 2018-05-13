'use strict';

var ChromecastAPI = require('chromecast-api') 
var browser = new ChromecastAPI.Browser()
var myDevice = {};
 
browser._updateDevice({ addresses: ['192.168.1.66'], name: 'SHIELD' });

browser.on('deviceOn', device => {
    console.log(device);
    if (device.config.name === 'SHIELD') {
        console.log('SHIELD BMF');
        myDevice.shield = device;
    }
    // var urlMedia = 'https://ia600205.us.archive.org/14/items/RickAstleyNeverGonnaGiveYouUp_201603/Rick%20Astley%20-%20Never%20Gonna%20Give%20You%20Up.mp4';
 
    // device.play(urlMedia, 0, function () {
    //     console.log('Playing in your chromecast')
 
    //     setTimeout(function () {
    //         //Pause the video
    //         device.pause(function () {
    //             console.log('Paused')
    //         })
    //     }, 15000)
 
    //     setTimeout(function () {
    //         //Stop video
    //         device.stop(function () {
    //             console.log('Stopped')
    //         })
    //     }, 15000)
 
    //     setTimeout(function () {
    //         //Close the streaming
    //         device.close(function () {
    //             console.log('Closed')
    //         })
    //     }, 15000)
    // })
})
 
module.exports = myDevice;