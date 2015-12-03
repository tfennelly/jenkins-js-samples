# Step 07 - jsdom tests
[jsdom] is a JavaScript implementation of the [WHATWG](https://whatwg.org/), DOM and HTML standards. It's quite
useful for writing unit tests.
  
In this sample plugin, we modified <a href="../../../tree/master/step-06-handlebars-templates">step-06-handlebars-templates</a>
a little so as the make it a small bit more interactive. We then added a simple unit test that used [jsdom] via [jenkins-js-test].
 
> Also see <a href="../../../tree/master/step-08-zombie-tests">step-08-zombie-tests</a> as an example of how to do Integration Testing. 

## How to run
The easiest way to run this Jenkins plugin is to [use the standard Maven HPI plugin for Jenkins](https://wiki.jenkins-ci.org/display/JENKINS/Plugin+tutorial#Plugintutorial-DebuggingaPlugin).

```sh
$ mvn hpi:run
```

After running the plugin you'll see that the form (that was in <a href="../../../tree/master/step-06-handlebars-templates">step-06-handlebars-templates</a>)
has now moved into a Twitter Bootstrap popover.

![root action page](img/root-action-page.png)

## The test
In this plugin, we want to add a JavaScript unit test to test this page i.e.:

1. That the big red button is displayed
1. That the popover form appears when we click on that button
1. That the popover form disappears when we click the form "Submit" button
 
To install `jenkins-js-test`:
 
```sh
$ npm install --save-dev jenkins-js-test
```

Since this is a maven project, [jenkins-js-builder] looks for the tests in `src/test/js` so that is where we
added the test "spec" file i.e. `src/test/js/jslib-samples-spec.js`. [jenkins-js-builder] uses [Jasmine] to
run all tests ("**/*-spec.js") it finds under the `src/test/js` sub directory.
 
[See the test code in jslib-samples-spec.js and read the comments therein](src/test/js/jslib-samples-spec.js).
 
## Running the test 
Running the tests from the commandline is easy. Just run `gulp` and that will run the tests too:

```sh
$ gulp
```

> The `gulp` process also runs as part of the `mvn` build, generating the JavaScript bundle(s) into the generated HPI artifact.

Running `gulp` should produce an output something like the following:

```sh
$ gulp
[16:19:09] Maven project
[16:19:09]  - src: src/main/js,src/main/less
[16:19:09]  - test: src/test/js
[16:19:09] Setting defaults
[16:19:09] Bundle will be generated in directory 'src/main/webapp/jsbundles' as 'jslib-samples.js'.
[16:19:09] Using gulpfile ~/projects/jenkins-plugins/jenkins-js-samples/step-07-jsdom-tests/gulpfile.js
[16:19:09] Starting 'jshint'...
[16:19:09] 	- Using default JSHint configuration (in jenkins-js-builder). Override by defining a .jshintrc in this folder.
[16:19:09] Finished 'jshint' after 155 ms
[16:19:09] Starting 'bundle_jslib-samples'...
[16:19:09] Finished 'bundle_jslib-samples' after 391 ms
[16:19:09] Starting 'bundle'...
[16:19:09] Finished 'bundle' after 8.02 μs
[16:19:09] Starting 'test'...
[16:19:09] Testing web server started on port 18999 (http://localhost:18999). Content root: /Users/tfennelly/projects/jenkins-plugins/jenkins-js-samples/step-07-jsdom-tests
[16:19:09] Test execution completed.
[16:19:09] Finished 'test' after 26 ms
[16:19:09] Starting 'default'...
[16:19:09] Finished 'default' after 17 μs
jslib-samples.js
  - test ...
 Passed
1 of 1 passed (0 skipped, 0 disabled).
SUCCESS: 1 spec, 0 failures, 0 skipped, 0 disabled in 0.256s.
[16:19:10] Testing web server stopped.
```

<hr/>
<p align="center">
<b><a href="../../../tree/master/step-06-handlebars-templates">&lt;&lt; PREV (step-06-handlebars-templates) &lt;&lt;</a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <a href="../../../tree/master/step-08-zombie-tests">&gt;&gt; NEXT (step-08-zombie-tests) &gt;&gt;</a></b>
</p>

[jsdom]: https://github.com/tmpvar/jsdom
[jenkins-js-test]: https://github.com/jenkinsci/js-test
[jenkins-js-builder]: https://github.com/jenkinsci/js-builder
[Jasmine]: http://jasmine.github.io/

