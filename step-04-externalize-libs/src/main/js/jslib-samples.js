var $ = require('bootstrap-detached').getBootstrap();

$(document).ready(function () {    
    $('#side-panel').remove();
    $('#main-panel').css('margin-left', '0px');
    
    var moment = require('moment');
    $('#main-panel .time').text(moment().format("MMM Do YY"));
});