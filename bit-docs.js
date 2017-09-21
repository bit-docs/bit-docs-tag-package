var pkg = require("./package");

/**
 * @parent plugins
 * @module {function} bit-docs-tag-package
 * @group bit-docs-tag-package/tags tags
 *
 * @description Adds a `@package` tag for use in `bit-docs`.
 *
 * @body
 *
 * This plugin registers onto the `tags` hook to add the
 * [bit-docs-tag-package/tags/package] tag.
 */
module.exports =  function(bitDocs) {
    bitDocs.register("tags",{
    	package: pkg
    });
};
