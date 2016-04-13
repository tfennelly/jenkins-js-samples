// Change from 'jquery-detached' to 'bootstrap-detached'
var $ = require('bootstrap-detached').getBootstrap();

$(document).ready(function () {
    var moment = require('moment');
    var formTemplate = require('./templates/form.hbs');

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
