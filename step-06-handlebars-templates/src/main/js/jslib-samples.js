// Change from 'jquery-detached' to 'bootstrap-detached'
var $ = require('bootstrap-detached').getBootstrap();
var handlebars = require('handlebars');
var formTemplate = handlebars.compile(require('fs')
    .readFileSync(__dirname + '/./templates/form.hbs', 'utf8'));

$(document).ready(function start() {
    var moment = require('moment');

    $('#side-panel').remove();

    $('#main-panel').css('margin-left', '0px');
    // Apply the 'form' template, appending the resulting content to
    // the 'form-container' element. We could also define a Handlers helper
    // to handle the formatted time.
    $('#form-container').append(formTemplate({
        time: moment().format('MMM Do YY')
    }));
});
