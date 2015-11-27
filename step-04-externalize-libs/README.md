# Step 03 - Add CommonJS modules ("nodeify")
`step-03-bootstrap` adds use of some more NPM packages, namely Twitter Bootstrap (via [bootstrap-detached]) and Moment.js.

## Install NPM packages
Install [bootstrap-detached] and Moment.js:

```sh
$ npm install --save bootstrap-detached moment
```

Since we are using [bootstrap-detached], we can uninstall [jquery-detached]:

```sh
$ npm uninstall --save jquery-detached
```

## Update 


<hr/>
<b><a href="../../../tree/master/step-02-nodeify">&lt;&lt; PREV (step-02-nodeify) &lt;&lt;</a>  |||  <a href="../../../tree/master/step-04-externalize-libs">&gt;&gt; NEXT (04-externalize-libs) &gt;&gt;</a></b>

[Node.js]: https://nodejs.org
[Gulp]: https://github.com/gulpjs/gulp
[jenkins-js-builder]: https://github.com/jenkinsci/js-builder
[jenkins-js-modules]: https://github.com/jenkinsci/js-modules
[CommonJS]: http://www.commonjs.org/
[jquery-detached]: https://github.com/tfennelly/jquery-detached
[bootstrap-detached]: https://github.com/tfennelly/bootstrap-detached
[Browserify]: http://browserify.org/
[bundle]: https://github.com/jenkinsci/js-modules/blob/master/FAQs.md#what-is-the-difference-between-a-module-and-a-bundle

