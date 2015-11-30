# Step 03 - Use more NPM packages i.e. Twitter Bootstrap and Moment.js - How it works
`step-03-more-npm-packs` builds on <a href="../../../tree/master/step-02-nodeify">step-02-nodeify</a>, adding a few more
NPM packages to the mix, namely Twitter Bootstrap (via [bootstrap-detached])
and Moment.js. This is one of the major benefits of using [CommonJS] style packages; it means we can easily utilise
the huge number of JavaScript packages available in the NPM registry.

## Install/Uninstall NPM packages
Install [bootstrap-detached] and Moment.js:

```sh
$ npm install --save bootstrap-detached moment
```

Since we are using [bootstrap-detached], we can uninstall [jquery-detached] because [bootstrap-detached]
is `jquery + bootstrap`:

```sh
$ npm uninstall --save jquery-detached
```

## Update `.js` and `.jelly`
The changes to the `src/main/js/jslib-samples.js` are very trivial.
 
```diff
-var $ = require('jquery-detached').getJQuery();
+// Change from 'jquery-detached' to 'bootstrap-detached' 
+var $ = require('bootstrap-detached').getBootstrap();
 
 $(document).ready(function () {    
     $('#side-panel').remove();
     $('#main-panel').css('margin-left', '0px');
+    
+    // Add some code to use momentjs, adding formatted time text to the page.
+    // See src/main/resources/org/jenkinsci/ui/samples/JSLibSample/index.jelly.
+    var moment = require('moment');
+    $('#main-panel .time').text(moment().format("MMM Do YY"));
 });
```

The changes to [JSLibSample/index.jelly](src/main/resources/org/jenkinsci/ui/samples/JSLibSample/index.jelly) were trivial,
the main one being that we added a CDN link to use the bootstrap styles:

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" ></link>
```

Of course in reality, you would not use a CDN for this. That's ok here though, since it's just a sample.

## Test run
Now take `step-03-more-npm-packs` for a test run and see the effect of these changes. 
Again, you can do this by simply [running the plugin using the HPI plugin](https://wiki.jenkins-ci.org/display/JENKINS/Plugin+tutorial#Plugintutorial-DebuggingaPlugin).

![root action page](img/root-action-page.png)

<hr/>
<p align="center">
<b><a href="../../../tree/master/step-02-nodeify">&lt;&lt; PREV (step-02-nodeify) &lt;&lt;</a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <a href="../../../tree/master/step-04-externalize-libs">&gt;&gt; NEXT (04-externalize-libs) &gt;&gt;</a></b>
</p>

[Node.js]: https://nodejs.org
[Gulp]: https://github.com/gulpjs/gulp
[jenkins-js-builder]: https://github.com/jenkinsci/js-builder
[jenkins-js-modules]: https://github.com/jenkinsci/js-modules
[CommonJS]: http://www.commonjs.org/
[jquery-detached]: https://github.com/tfennelly/jquery-detached
[bootstrap-detached]: https://github.com/tfennelly/bootstrap-detached
[Browserify]: http://browserify.org/
[bundle]: https://github.com/jenkinsci/js-modules/blob/master/FAQs.md#what-is-the-difference-between-a-module-and-a-bundle

