// Change from 'jquery-detached' to 'bootstrap-detached'
var $ = require('bootstrap-detached').getBootstrap();
var handlebars = require('handlebars');
var formTemplate = handlebars.compile(require('fs')
    .readFileSync(__dirname + '/./templates/form.hbs', 'utf8'));

/* eslint-disable func-names */

$(document).ready(function () {
    var moment = require('moment');

    $('#side-panel').remove();
    $('#main-panel').css('margin-left', '0px');

    // Apply the 'form' template, appending the resulting content to
    // the 'form-container' element. We could also define a Handlers helper
    // to handle the formatted time.
    $('#submit-details').click(function () {
        var popoverContent = formTemplate({
            time: moment().format('MMM Do YY')
        });
        $('#submit-details').popover({
            title: 'Please submit your details',
            content: popoverContent,
            html: true,
            trigger: 'manual'
        });
        $('#submit-details').on('shown.bs.popover', function () {
            $('#submit-details-go').click(function () {
                $('#submit-details').popover('destroy');
            });
        });
        $('#submit-details').popover('show');
    });
});
