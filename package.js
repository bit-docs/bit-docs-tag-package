var path = require("path");
var fs = require("fs");

module.exports = {
    add: function(line, curData, scope, objects, currentWrite) {
        var pkgPath = path.join(path.dirname(this.src.path), line.replace("@package", "").trim());
        var pkg = fs.readFileSync(pkgPath).toString();
		curData.package = JSON.parse(pkg);
    }
};
