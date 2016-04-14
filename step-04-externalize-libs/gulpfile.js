var builder = require('@jenkins-cd/js-builder');

//
// Bundle the modules.
// See https://github.com/jenkinsci/js-builder
//
builder.bundle('src/main/js/jslib-samples.js')
       .inDir('src/main/webapp/jsbundles');

//
// Bundle the bootstrap CSS (and associated files).
// Will be made available as a Jenkins adjunct - check build output message.
//
builder.bundle('src/main/css/bootstrap336/bootstrap.css');