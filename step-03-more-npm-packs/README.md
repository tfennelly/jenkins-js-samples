# Step 03 - Use more NPM packages i.e. Twitter Bootstrap and Moment.js
`step-03-more-npm-packs` builds on <a href="../../../tree/master/step-02-nodeify">step-02-nodeify</a>, adding a few more
NPM packages to the mix, namely Twitter Bootstrap (via [bootstrap-detached])
and Moment.js. This is one of the major benefits of using [CommonJS] style packages; it means we can easily utilise
the huge number of JavaScript packages available in the NPM registry.

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

On running the plugin, you will see the following screen. The main change from 
<a href="../../../tree/master/step-02-nodeify">step-02-nodeify</a> is the fact that the sample is utilizing
bootstrap and moment.js (see <a href="HOW-IT-WORKS.md">how it works</a>).  

![root action page](img/root-action-page.png)

## How it works

<a href="HOW-IT-WORKS.md"><img src="../img/how-it-works.png" /></a>

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

