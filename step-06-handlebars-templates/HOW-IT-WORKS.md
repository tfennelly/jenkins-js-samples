# Step 06 - Handlebars Templates - How it works
In this plugin (`step-06-handlebars-templates`), we build on <a href="../../../tree/master/step-04-externalize-libs">step-04-externalize-libs</a>,
changing it to apply client-side templates using the [Handlebars] templating engine.

With this model, we change from the "traditional" pure server-side content rendering approach of Jenkins (in `.jelly` files),
to an approach where just the bare minimum content is rendered server-side, and the reset of the content is rendered on
the client-side e.g. the client-side makes a REST API call to get some data from the server and then applies a template
to that data to produce the view content. This approach is fundamental to creating a more dynamic/slick user experience
(Vs full page reloading etc).
 
[Handlebars] is actually quite a tricky package to use with Browserify, especially if registering [Handlebars] helpers
(which most apps need to do). The following sections outline the changes that were made to
<a href="../../../tree/master/step-04-externalize-libs">step-04-externalize-libs</a> in order for it to use [Handlebars] templates.

## Update `pom.xml` to add `handlebars` HPI plugin dependency
The [Handlebars HPI plugin](https://github.com/jenkinsci/js-libs/tree/master/handlebars) in [jenkins-js-libs] provides
a [jenkins-js-modules] compatible [bundle] version of [Handlebars] i.e. [Handlebars] that can be linked into a [jenkins-js-modules]
[bundle].

The `<dependencies>` section in the `pom.xml` of this plugin was updated to include this HPI.

```diff
     <dependencies>
         <!-- Load the framework libs from plugins Vs bundling them in an uber-bundle. -->
         <dependency>
             <groupId>org.jenkins-ci.ui</groupId>
             <artifactId>bootstrap</artifactId>
             <version>1.2</version>
             <type>hpi</type>
         </dependency>
         <dependency>
             <groupId>org.jenkins-ci.ui</groupId>
             <artifactId>momentjs</artifactId>
             <version>1.0</version>
             <type>hpi</type>            
         </dependency>
+        <dependency>
+            <groupId>org.jenkins-ci.ui</groupId>
+            <artifactId>handlebars</artifactId>
+            <version>1.0</version>
+            <type>hpi</type>            
+        </dependency>
     </dependencies>
```

## Install `jenkins-handlebars-rt` NPM package

```sh
$ npm install --save jenkins-handlebars-rt
```

This package is needed in order for [Handlebarsify](https://www.npmjs.com/package/handlebarsify) to work properly.

## Add `withExternalModuleMapping` in `gulpfile.js`

```diff
 var builder = require('jenkins-js-builder');
 
 //
 // Bundle the modules.
 // See https://github.com/jenkinsci/js-builder
 //
 builder.bundle('src/main/js/jslib-samples.js')
        .withExternalModuleMapping('bootstrap-detached', 'bootstrap:bootstrap3')
        .withExternalModuleMapping('moment', 'momentjs:momentjs2')
+       .withExternalModuleMapping('handlebars', 'handlebars:handlebars3')
        .inDir('src/main/webapp/jsbundles');
```

## Move the form to `form.hbs` (from `JSLibSample/index.jelly`)
Add the [Handlerbars] template in [src/main/js/templates/form.hbs](src/main/js/templates/form.hbs). Note the `{{time}}`
token; this will make more sense when we get to the `.js` changes below.

```html
<h4 class="time">{{time}}</h4>
<form>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox">Check me out</input>
        </label>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
</form>
```

Delete the same form content from [JSLibSample/index.jelly](src/main/resources/org/jenkinsci/ui/samples/JSLibSample/index.jelly)
and replace with a simple `<div id="form-container"></div>` holder element; again, this will make more sense when we get to the
`.js` changes below.
 
```diff
     <l:layout title="Jenkins JS Lib Samples" norefresh="true">
         <l:main-panel>
             <h1>Jenkins JS Samples</h1>
-            <h4 class="time"></h4>
-            <form>
-                <div class="form-group">
-                    <label for="exampleInputEmail1">Email address</label>
-                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"></input>
-                </div>
-                <div class="form-group">
-                    <label for="exampleInputPassword1">Password</label>
-                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
-                </div>
-                <div class="checkbox">
-                    <label>
-                        <input type="checkbox">Check me out</input>
-                    </label>
-                </div>
-                <button type="submit" class="btn btn-default">Submit</button>
-            </form>
+            <div id="form-container"></div>
         </l:main-panel>
     </l:layout>
```

## Modify `jslib-samples.js` to use Handlerbars
We modified [jslib-samples.js](src/main/js/jslib-samples.js) to use the `form.hbs` [Handlerbars] template, injecting the
Moment.js generated `time` value into the template (remember the `{{time}}` tokens in `form.hbs`).

```diff
     $('#side-panel').remove();
     $('#main-panel').css('margin-left', '0px');
     
-    // Add some code to use momentjs, adding formatted time text to the page.
-    // See src/main/resources/org/jenkinsci/ui/samples/JSLibSample/index.jelly.
     var moment = require('moment');
-    $('#main-panel .time').text(moment().format("MMM Do YY"));
+    var formTemplate = require('./templates/form.hbs');    
+
+    // Apply the 'form' template, appending the resulting content to
+    // the 'form-container' element. We could also define a Handlers helper
+    // to handle the formatted time.
+    $('#form-container').append(formTemplate({
+        time: moment().format("MMM Do YY")
+    }));
 }); 
```

<hr/>
<p align="center">
<b><a href="../../../tree/master/step-04-externalize-libs">&lt;&lt; PREV (step-04-externalize-libs) &lt;&lt;</a></b>
</p>

[Handlebars]: http://handlebarsjs.com/
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

