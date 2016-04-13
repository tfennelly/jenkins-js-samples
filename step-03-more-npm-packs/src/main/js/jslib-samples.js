// Change from 'jquery-detached' to 'bootstrap-detached'
var $ = require('bootstrap-detached').getBootstrap();

$(document).ready(function start() {
    var moment = require('moment');

    $('#side-panel').remove();
    $('#main-panel').css('margin-left', '0px');

    // Add some code to use momentjs, adding formatted time text to the page.
    // See src/main/resources/org/jenkinsci/ui/samples/JSLibSample/index.jelly.
    $('#main-panel .time').text(moment().format('MMM Do YY'));
});
