# Step 02 - Add CommonJS modules ("nodeify")
The plugin in this step (`step-02-nodeify`) builds on top of <a href="../../../tree/master/step-01-basic">step-01-basic</a>,
adding some [CommonJS] modules.

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

On running the plugin, you will see the following screen. Nothing much has visually changed from
<a href="../../../tree/master/step-01-basic">step-01-basic</a>, apart from the fact that some Modularized
JavaScript has run (see <a href="HOW-IT-WORKS.md">how it works</a>) which removed the left side-panel.  

![root action page](img/root-action-page.png)

## How it works

<a href="HOW-IT-WORKS.md"><img src="../img/how-it-works.png" /></a>

<hr/>
<b><a href="../../../tree/master/step-01-basic">&lt;&lt; PREV (step-01-basic) &lt;&lt;</a>  |||  <a href="../../../tree/master/step-03-more-npm-packs">&gt;&gt; NEXT (step-03-more-npm-packs) &gt;&gt;</a></b>

[Node.js]: https://nodejs.org
[Gulp]: https://github.com/gulpjs/gulp
[jenkins-js-builder]: https://github.com/jenkinsci/js-builder
[jenkins-js-modules]: https://github.com/jenkinsci/js-modules
[CommonJS]: http://www.commonjs.org/
[jquery-detached]: https://github.com/tfennelly/jquery-detached
[Browserify]: http://browserify.org/
[bundle]: https://github.com/jenkinsci/js-modules/blob/master/FAQs.md#what-is-the-difference-between-a-module-and-a-bundle
