# Step 06 - Handlebars Templates
In this plugin (`step-06-handlebars-templates`), we build on <a href="../../../tree/master/step-04-externalize-libs">step-04-externalize-libs</a>,
changing it to apply client-side templates using the [Handlebars] templating engine.

With this model, we change from the "traditional" pure server-side content rendering approach of Jenkins (in `.jelly` files),
to an approach where just the bare minimum content is rendered server-side, and the reset of the content is rendered on
the client-side e.g. the client-side makes a REST API call to get some data from the server and then applies a template
to that data to produce the view content. This approach is fundamental to creating a more dynamic/slick user experience
(Vs full page reloading etc). 

<p>
<ol>
    <li><a href="#how-to-run">How to run</a><br/>
    <li><a href="HOW-IT-WORKS.md">How it works</a><br/>
</ol>    
</p>

## How to run
The easiest way to run this Jenkins plugin is to [use the standard Maven HPI plugin for Jenkins](https://wiki.jenkins-ci.org/display/JENKINS/Plugin+tutorial#Plugintutorial-DebuggingaPlugin).

```sh
$ mvn hpi:run
```

Again, nothing visual changes from <a href="../../../tree/master/step-04-externalize-libs">step-04-externalize-libs</a> to this plugin.
The only difference is in <a href="HOW-IT-WORKS.md">how it works</a>, specifically in how the form content is rendered on the client-side
using [Handlebars] templates.

## How it works

<a href="HOW-IT-WORKS.md"><img src="../img/how-it-works.png" /></a>

<hr/>
<p align="center">
<b><a href="../../../tree/master/step-05-namespaced-css">&lt;&lt; PREV (step-05-namespaced-css) &lt;&lt;</a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <a href="../../../tree/master/step-07-jsdom-tests">&gt;&gt; NEXT (step-07-jsdom-tests) &gt;&gt;</a></b>
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

