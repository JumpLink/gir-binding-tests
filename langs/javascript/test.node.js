// Install gir.js: npm install gir@latest
// more infos on: https://github.com/creationix/node-gir

var gir = require("gir");
gir.init();
//gir.search_path("/home/jumplink/Projekte/git/vala-object/");
//console.log(gir);

var ValaObject = gir.load('ValaObject', '0.1');

var nodejs_version = 'Node.js Version: ' + process.version;

ValaObject.global_method(nodejs_version);

ValaObject.ValaClass.static_class_method(nodejs_version);

var ValaClass = new ValaObject.ValaClass();

ValaClass.class_method(nodejs_version);

