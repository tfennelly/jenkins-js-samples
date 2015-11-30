# Step 01 - A "basic" Plugin
A basic Jenkins plugin with just adds a standard Jenkins "root action" page that contains
a simple form.

## How to run
The easiest way to run this Jenkins plugin to [use standard Maven HPI plugin for Jenkins](https://wiki.jenkins-ci.org/display/JENKINS/Plugin+tutorial#Plugintutorial-DebuggingaPlugin).

```sh
$ export MAVEN_OPTS="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,address=8000,suspend=n"
$ mvn hpi:run
```

![root action](img/root-action.png)
![root action page](img/root-action-page.png)

## How it works

<a href="HOW-IT-WORKS.md"><img src="../img/how-it-works.png" /></a>

<hr/>
<b><a href="../../../tree/master/step-02-nodeify">&gt;&gt; NEXT (step-02-nodeify) &gt;&gt;</a></b>

[Plugin Tutorial]: https://wiki.jenkins-ci.org/display/JENKINS/Plugin+tutorial
[jenkins-js-builder]: https://github.com/jenkinsci/js-builder
[CommonJS]: http://www.commonjs.org/
