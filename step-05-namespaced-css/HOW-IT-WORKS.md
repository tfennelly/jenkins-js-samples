# Step 05 - "Namespaced" CSS - How it works
In this plugin (`step-05-namespaced-css`), we modify <a href="../../../tree/master/step-04-externalize-libs">step-04-externalize-libs</a>
a little so as to demonstrate how to "namespace" a set of CSS rules.

Namespacing the CSS rules makes it safer to use multiple versions of the same CSS lib on the same page. So if, for example, you are
using bootstrap on a widget that gets added to a page on which other plugins are contributing content (e.g. the Job index page),
then it makes sense to use a namespaced CSS for bootstrap in case another widget also uses bootstrap, but is using a different version.

## CSS/LESS and `index.jelly` changes
The easiest way to namespace the CSS rules is to pre-process the ruleset using [LESS]. In this sample, we will namespace the
bootstrap rules by introducing a `bootstrap-3` namespace. To do this, we added a [bootstrap-ns3.less](src/main/css/bootstrap336/bootstrap-ns3.less)
in `src/main/css/bootstrap336`. It simply does a [LESS] `@import` of the `bootstrap.css` rules, adding the `.bootstrap-3` class on all of them.

```less
.bootstrap-3 {
  @import (less) "bootstrap.css";
}
```

Of course we also had to modify the `gulpfile.js`, telling it to bundle the new [LESS] file:

```javascript
builder.bundle('src/main/css/bootstrap336/bootstrap-ns3.less');
```

We also had to modify [JSLibSample/index.jelly](src/main/resources/org/jenkinsci/ui/samples/JSLibSample/index.jelly) to "namespace" the content
using `<div class="bootstrap-3">`, as well as updating the CSS adjunct in accordance with the name of the adjunct specified in the build output:

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
     
     <!-- 
         Add the .js bundle that's been generated into an adjunct folder (by the gulpfile.js).
         See build output for adjunct details.
     -->
     <st:adjunct includes="org.jenkins.ui.jsmodules.step_05_namespaced_css.jslib-samples"/>
-    <st:adjunct includes="org.jenkins.ui.jsmodules.bootstrap336.bootstrap"/>
+    <st:adjunct includes="org.jenkins.ui.jsmodules.bootstrap336.bootstrap-ns3"/> 
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
[LESS]: http://lesscss.org/

