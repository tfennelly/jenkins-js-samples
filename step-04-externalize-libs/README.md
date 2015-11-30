# Step 04 - Externalize Dependency Libraries (slim down)
With `step-03-more-npm-packs`, we have a plugin using Modularized [CommonJS] style JavaScript, which is good. Using
[CommonJS] means we can easily use any of the huge number of JavaScript packages available in the NPM registry.

This is great, but one of the issues with `step-03-more-npm-packs` is that its [bundle] contains everything it needs,
including jQuery, Bootstrap, Moment.js and anything else we might add. This results in a quite bloated `.js` [bundle]
for `step-03-more-npm-packs` - roughly 300Kb. If a given Jenkins page loads multiple `.js` bundles like this, it will
potentially result in multiple jQuery instances (and Bootstrap, Moment.js etc) being loaded. What we really want in
this kind of situations is to have slimmer/lighter "App" bundles, all sharing the same jQuery etc.

In `step-04-externalize-libs`, we build on top of <a href="../../../tree/master/step-03-more-npm-packs">step-03-more-npm-packs</a>,
using [jenkins-js-modules] to load HPI bundled versions of [bootstrap-detached]
and Moment.js. This means that `step-04-externalize-libs`s `.js` [bundle] will no longer include these dependencies
and it's size will reduce to less than 30Kb (as opposed to 300Kb). Note that this change should not require app `.js`
code changes. The only changes should be in how we build the app [bundle].

[jenkins-js-libs] contains HPI bundled versions of [bootstrap-detached] etc. Browse around [jenkins-js-libs] and take
note of what's currently available. We will be adding more over time. 

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

Nothing visual changes from <a href="../../../tree/master/step-03-more-npm-packs">step-03-more-npm-packs</a> to this plugin.  
The only difference is in <a href="HOW-IT-WORKS.md">how it works</a>, specifically in how it loads JavaScript dependency
libraries.  

## How it works

<a href="HOW-IT-WORKS.md"><img src="../img/how-it-works.png" /></a>

<hr/>
<b><a href="../../../tree/master/step-03-more-npm-packs">&lt;&lt; PREV (step-03-more-npm-packs) &lt;&lt;</a></b>

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

