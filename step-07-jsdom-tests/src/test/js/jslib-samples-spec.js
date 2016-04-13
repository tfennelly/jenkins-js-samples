var jsTest = require("@jenkins-cd/js-test");

// This is a Jasmine test that uses the jsdom lib via @jenkins-cd/js-test. @jenkins-cd/js-test
// just wraps up some things and makes jsdom a bit easier to use.

describe("jslib-samples.js", function () {

    it("- test", function (done) {
        
        // Create a "fake" page with the same button as is on the real page when the plugin
        // is run in Jenkins.
        var PAGE = '<html><head></head><body><button id="submit-details" type="button" class="btn btn-lg btn-danger">Click to submit details</button></body></html>';
        
        // "Load" the fake page using @jenkins-cd/js-test. @jenkins-cd/js-test wraps jsdom, but also makes sure
        // the environment is reset properly for this test.
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
            
            // Calling done tells Jasmine that the test is complete.
            done();
        }, PAGE);
    });
});