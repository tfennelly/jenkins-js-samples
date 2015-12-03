// See http://zombie.js.org/
var Browser = require("zombie");

describe("step 08 - zombie headless browser test", function () {

    it("- basic test", function (done) {
        var browser = new Browser();
        
        // Lets see what zombie is doing (on the console)
        browser.debug();
        
        // Load the test page src/test/js/testpage.html
        browser.visit('http://localhost:18999/src/test/js/testpage.html', function() {
            expect(browser.success).toBe(true);
            
            // Make some assertions (http://zombie.js.org/#assertions)...
            browser.assert.elements('#submit-details', 1);
            browser.assert.elements('#submit-details-go', 0);
            
            // Click/press the #submit-details button ...
            browser.pressButton('Click to submit details', function() {
                // Make some assertions (http://zombie.js.org/#assertions)...
                browser.assert.elements('#submit-details-go', 1);
                
                // Press the submit button on the form...
                browser.pressButton('Submit', function() {
                    // Which should make the form popover disappear again..
                    browser.assert.elements('#submit-details-go', 0);      
                    
                    // Yipee, all looks good... tells Jasmine that the test is complete.
                    done();
                });
            });
        });
    });
});
