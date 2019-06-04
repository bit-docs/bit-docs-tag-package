var path = require("path");
var fs = require("graceful-fs");

/**
 * @parent bit-docs-tag-package/tags
 * @module {bit-docs-process-tags/types/tag} bit-docs-tag-package/tags/package @package
 *
 * @description Adds the package's `package.json` info to the
 * [bit-docs/types/docObject].
 *
 * @signature `@package PATH`
 *
 * Once added to the [bit-docs/types/docObject], you can reference the
 * `package.json` properties like `name`, `description`, `author`, etc in
 * `.mustache` templates.
 *
 * @param {String} PATH The path to a `package.json` file.
 *
 * @body
 *
 * An example `package.json` file might look like:
 *
 * ```js
 * {
 *   "name": "my-package",
 *   "version": "0.0.1",
 *   "description": "My cool package.",
 * }
 * ```
 *
 * That gets used like:
 *
 * ```js
 * @@package ./demos/package.json
 * ```
 */
module.exports = {
    add: function(line, curData, scope, objects, currentWrite) {
		var atPackagePath = line.replace("@package", "").trim();
		var pkgPath = path.join(path.dirname(this.src.path), atPackagePath);
		var pkg;
		try {
			pkg = fs.readFileSync(pkgPath).toString();
		} catch(e) {
			if(e.code === "ENOENT") {
				var newError = new Error('@package: Unable to locate ' +
					atPackagePath + " from " + this.src.path
				);
				throw newError;
			}

			throw e;
		}
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
