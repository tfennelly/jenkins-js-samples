var builder = require('jenkins-js-builder');

//
// Bundle the modules.
// See https://github.com/jenkinsci/js-builder
//
builder.bundle('src/main/js/jslib-samples.js')
       .withExternalModuleMapping('bootstrap-detached', 'bootstrap:bootstrap3', {addDefaultCSS: true})
       .withExternalModuleMapping('moment', 'momentjs:momentjs2')
       .inDir('src/main/webapp/jsbundles');
