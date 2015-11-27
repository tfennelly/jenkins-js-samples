# Step 02 - Add CommonJS modules ("nodeify")
The next step is to add some [CommonJS] modules to your plugin. We use [jenkins-js-builder] and some other [Node.js]
tools to build a self contained browser-ready JavaScript "bundle" that can be loaded through your Jenkins `.jelly` files
(or whatever mechanism works for your plugin).

There are a few simple steps to adding [CommonJS] modules to your plugin:
 
1. On your dev machine, install [Node.js] v4.0.0+ and [Gulp] (globally i.e. `-g`). See note below.  
1. Add a `package.json` file to the root of your plugin using the [`npm init`](https://docs.npmjs.com/cli/init) command.
1. Install the minimum set of NPM packages required for your plugin to build ([gulp](https://github.com/gulpjs/gulp) and [jenkins-js-builder]).
1. Add a `gulpfile.js` file to the root of your plugin.
1. If building against a plugin parent POM older than `org.jenkins-ci.plugins:plugins:1.639`, add node/gulp build `<profile>`s to the plugin's `pom.xml`.

> __NOTE__ that [Node.js] and [Gulp] only needs to be installed on Dev machines so as to allow the running of node/npm/gulp etc commands while developing the plugin. A simple check out and build of your plugin (using maven) will NOT require [Node.js] to be installed on the build machine. The maven build will take care of everything.

<b><a href="../../../tree/master/step-01-basic">&lt;&lt; PREV (step-01-basic)</a></b> <b style="float: right;"><a href="../../../tree/master/step-03-bootstrap">NEXT (step-03-bootstrap) &gt;&gt;</a></b>

[Node.js]: https://nodejs.org
[Gulp]: https://github.com/gulpjs/gulp
[jenkins-js-builder]: https://github.com/jenkinsci/js-builder
[jenkins-js-modules]: https://github.com/jenkinsci/js-modules
[CommonJS]: http://www.commonjs.org/
