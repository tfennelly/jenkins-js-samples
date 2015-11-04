var builder = require('jenkins-js-builder');

//
// Bundle the modules.
// See https://github.com/tfennelly/jenkins-js-builder
//
builder.bundle('src/main/js/jslib-samples.js')
       .inDir('src/main/webapp/jsbundles');
