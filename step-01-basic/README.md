# Step 01 - A "basic" Plugin
Creating a basic Jenkins plugin is already well covered in the [Plugin Tutorial] on the wiki. 

This plugin ("step-01-basic") just adds a standard Jenkins "root action" page that contains
a simple form.

![root action](img/root-action.png)
![root action page](img/root-action-page.png)

At this point, we are ready to "nodeify" the plugin by adding some CommonJS JavaScript modules and,
from them, create a browser-ready bundle that has everything it needs to function.

<b><a href="../../../tree/master/step-02-nodeify">NEXT (step-02-nodeify) &gt;&gt;</a></b>

[Plugin Tutorial]: https://wiki.jenkins-ci.org/display/JENKINS/Plugin+tutorial
[jenkins-js-builder]: https://github.com/jenkinsci/js-builder