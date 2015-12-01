// Change from 'jquery-detached' to 'bootstrap-detached' 
var $ = require('bootstrap-detached').getBootstrap();

$(document).ready(function () {    
    $('#side-panel').remove();
    $('#main-panel').css('margin-left', '0px');
    
    var moment = require('moment');
    var formTemplate = require('./templates/form.hbs');    

    // Apply the 'form' template, appending the resulting content to
    // the 'form-container' element. We could also define a Handlers helper
    // to handle the formatted time.
    $('#form-container').append(formTemplate({
        time: moment().format("MMM Do YY")
    }));
});