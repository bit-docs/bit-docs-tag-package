var path = require("path");
var fs = require("fs");

var typeConverters = {
  stache: 'html',
  mustache: 'html',
  component: 'html'
};

var convertType = function(type) {
  return typeConverters[type] || type;
};

module.exports = {
    add: function(line, curData, scope, objects, currentWrite) {
		var sourcePath = path.join(path.dirname(this.src.path));
		var pkgPath = line.split(' ')[1];
		var pkg = require(path.join(sourcePath, pkgPath));
		curData.package = pkg;
    }
};
