var jsTest = require("jenkins-js-test");

// This is a Jasmine test that uses the jsdom lib via jenkins-js-test. jenkins-js-test
// just wraps up some things and makes jsdom a bit easier to use.

describe("jslib-samples.js", function () {

    it("- test", function (done) {
        
        var PAGE = '<html><head></head><body><button id="submit-details" type="button" class="btn btn-lg btn-danger">Click to submit details</button></body></html>';
        jsTest.onPage(function() {
            // Load the CommonJS module under test
            jsTest.requireSrcModule('jslib-samples.js');

            // Get bootstrap and manually fire events, mimicing user interactions
            var bootstrap = require("bootstrap-detached");
            var $ = bootstrap.getBootstrap();
                                
            // Make sure the submit-details-go button is not visible
            expect($('#submit-details-go').length).toBe(0);
            
            // Click the submit  
            $('#submit-details').click();
            
            // Make sure that the popover with the submit-details-go button
            // is visible now
            expect($('#submit-details-go').length).toBe(1);                        
            
            // Click the submit go button on the popover. It should disappear then.
            $('#submit-details-go').click();
                                
            // Make sure the submit-details-go button is no longer visible
            expect($('#submit-details-go').length).toBe(0);
            
            done();
        }, PAGE);
    });
});