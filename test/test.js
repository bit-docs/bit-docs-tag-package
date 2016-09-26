var processTags = require("bit-docs-process-tags");
var pkg = require("../package");
var path = require("path");
var assert = require("assert");

describe("sourceref", function() {
    it("adds the package.json info", function() {
		var docMap = {};

		processTags({
			comment: "@constructor\n@package ./js/package.json",
			scope: {},
			docMap: docMap,
			docObject: {
                src: {
                    path: path.join(__dirname, "code","test.js")
                }
            },
			tags: {
                package: pkg,
                constructor: {
    				add : function() {
    					this.name = "constructed";
    					this.type = "constructor";
    					return ["scope", this];
    				}
    			}
            }
		}, function(newDoc, newScope) {
            assert.ok(newDoc.package.version === '0.0.1');
		});
	});
});
