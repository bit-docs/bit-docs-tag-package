var pkg = require("./package");

/**
 * @module {function} bit-docs-tag-package
 * @parent plugins
 *
 * @description Adds a `@package` tag for use in `bit-docs`.
 *
 * @body
 *
 * `@package` will add the package's `package.json` info to the `docObject`.
 *
 * Use: `@pacakge ../../package.json`
 */
module.exports =  function(bitDocs) {
    bitDocs.register("tags",{
    	package: pkg
    });
};
