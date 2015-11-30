# Step 01 - A "basic" Plugin - How it Works
Creating a basic Jenkins plugin is already well covered in the [Plugin Tutorial] on the wiki.

There's really nothing much to this first Jenkins plugin in this repo. It's just a standard Jenkins plugin with
nothing extra. It acts as the foundation for the other sample plugins in this repository.

This plugin ("step-01-basic") just adds a standard Jenkins "root action" page that contains
a simple form.

On running the plugin (`mvn hpi:run`), you will see the following screens.

![root action](img/root-action.png)
![root action page](img/root-action-page.png)

At this point, we are ready to "nodeify" the plugin by adding some [CommonJS] JavaScript modules.

<hr/>
<p align="center">
<b><a href="../../../tree/master/step-02-nodeify">&gt;&gt; NEXT (step-02-nodeify) &gt;&gt;</a></b>
</p>

[Plugin Tutorial]: https://wiki.jenkins-ci.org/display/JENKINS/Plugin+tutorial
[jenkins-js-builder]: https://github.com/jenkinsci/js-builder
[CommonJS]: http://www.commonjs.org/
