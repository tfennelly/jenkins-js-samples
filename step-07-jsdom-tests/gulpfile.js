var builder = require('@jenkins-cd/js-builder');

//
// Bundle the modules.
// See https://github.com/jenkinsci/js-builder
//
builder.bundle('src/main/js/jslib-samples.js')
       .withExternalModuleMapping('bootstrap-detached', 'bootstrap:bootstrap3')
       .withExternalModuleMapping('moment', 'momentjs:momentjs2')
       .withExternalModuleMapping('handlebars', 'handlebars:handlebars3')
       .inDir('src/main/webapp/jsbundles');
