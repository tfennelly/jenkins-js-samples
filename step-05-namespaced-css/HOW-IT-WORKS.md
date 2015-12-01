# Step 05 - "Namespaced" CSS - How it works
In this plugin (`step-05-namespaced-css`), we modify <a href="../../../tree/master/step-04-externalize-libs">step-04-externalize-libs</a>
a little so as to use [the default "namespaced" CSS for Twitter Bootstrap](https://github.com/jenkinsci/js-libs/tree/master/bootstrap#css-namespacing).

Namespacing the CSS rules makes it safer to use multiple versions of the same CSS lib on the same page. So if, for example, you are
using bootstrap on a widget that gets added to a page on which other plugins are contributing content (e.g. the Job index page),
then it makes sense to use a namespaced CSS for bootstrap in case another widget also uses bootstrap, but is using a different version.

## Changes to `gulpfile.js` and `index.jelly`
You can create and use your own namespaced CSS, but the bootstrap bundle comes with a
[default namespaced CSS](https://github.com/jenkinsci/js-libs/tree/master/bootstrap#css-namespacing) and using it is trivial.

Simply set the `addDefaultCSS` option on the `withExternalModuleMapping` call in the `gulpfile.js`:

```diff
 var builder = require('jenkins-js-builder');
 
 //
 // Bundle the modules.
 // See https://github.com/jenkinsci/js-builder
 //
 builder.bundle('src/main/js/jslib-samples.js')
-       .withExternalModuleMapping('bootstrap-detached', 'bootstrap:bootstrap3')
+       .withExternalModuleMapping('bootstrap-detached', 'bootstrap:bootstrap3', {addDefaultCSS: true})
        .withExternalModuleMapping('moment', 'momentjs:momentjs2')
        .inDir('src/main/webapp/jsbundles');
```

And modify [JSLibSample/index.jelly](src/main/resources/org/jenkinsci/ui/samples/JSLibSample/index.jelly) to "namespace" the content
using `<div class="bootstrap-3">`, as well as removing the CDN `<script>` element for bootstrap:

```diff
 <j:jelly xmlns:j="jelly:core" xmlns:st="jelly:stapler" xmlns:d="jelly:define" xmlns:l="/lib/layout" xmlns:t="/lib/hudson" xmlns:s="/lib/form">
     <l:layout title="Jenkins JS Lib Samples" norefresh="true">
         <l:main-panel>
+            <div class="bootstrap-3">
             <h1>Jenkins JS Samples</h1>
             <h4 class="time"></h4>
             <form>
                 <div class="form-group">
                     <label for="exampleInputEmail1">Email address</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"></input>
                 </div>
                 <div class="form-group">
                     <label for="exampleInputPassword1">Password</label>
                     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                 </div>
                 <div class="checkbox">
                     <label>
                         <input type="checkbox">Check me out</input>
                     </label>
                 </div>
                 <button type="submit" class="btn btn-default">Submit</button>
             </form>
+            </div>
         </l:main-panel>
     </l:layout>
     
     <!-- Add the bundle that's been generated into the webapp/jsbundles folder (by the gulpfile.js) -->
     <script src="../plugin/step-05-namespaced-css/jsbundles/jslib-samples.js" type="text/javascript"></script>
-    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" ></link>
 </j:jelly>
```

<hr/>
<p align="center">
<b><a href="../../../tree/master/step-04-externalize-libs">&lt;&lt; PREV (step-04-externalize-libs) &lt;&lt;</a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <a href="../../../tree/master/step-06-handlebars-templates">&gt;&gt; NEXT (step-06-handlebars-templates) &gt;&gt;</a></b>
</p>

[Node.js]: https://nodejs.org
[Gulp]: https://github.com/gulpjs/gulp
[jenkins-js-builder]: https://github.com/jenkinsci/js-builder
[jenkins-js-modules]: https://github.com/jenkinsci/js-modules
[jenkins-js-libs]: https://github.com/jenkinsci/js-libs
[CommonJS]: http://www.commonjs.org/
[jquery-detached]: https://github.com/tfennelly/jquery-detached
[bootstrap-detached]: https://github.com/tfennelly/bootstrap-detached
[Browserify]: http://browserify.org/
[bundle]: https://github.com/jenkinsci/js-modules/blob/master/FAQs.md#what-is-the-difference-between-a-module-and-a-bundle

