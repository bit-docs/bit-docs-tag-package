var path = require("path");
var fs = require("graceful-fs");

module.exports = {
    add: function(line, curData, scope, objects, currentWrite) {
        var pkgPath = path.join(path.dirname(this.src.path), line.replace("@package", "").trim());
        var pkg = fs.readFileSync(pkgPath).toString();
        var result = JSON.parse(pkg);

        // delete things that would be too big
        delete result.readme;
        // or things that don't matter
        for(var prop in result) {
            if(prop[0] === "_") {
                delete result[prop];
            }
        }
		curData.package = result;
    }
};
