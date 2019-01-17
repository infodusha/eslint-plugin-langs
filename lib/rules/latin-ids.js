/**
 * @fileoverview Only latin letters can be used in identifiers
 * @author kindcoder
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "Only latin letters can be used in identifiers",
            category: "Possible Errors",
            recommended: true
        },
        schema: []
    },

    create: function(context) {

        function latinTest(node) {
            let noLatin = node.name.match(/[^a-z0-9_$]/ig);
            if(noLatin) {
                let identifier;
                let ename;
                if(noLatin.length === node.name.length) {
                    ename = 'identifier';
                    identifier = node.name;
                } else {
                    ename = noLatin.length === 1 ? 'letter' : 'letters';
                    identifier = noLatin.join(', ');
                }
                context.report({
                    node: node,
                    message: "Unexpected no-latin {{ ename }}: {{ identifier }}",
                    data: {
                        ename: ename,
                        identifier: identifier
                    },
                    url: "https://github.com/infodusha/eslint-plugin-langs/tree/master/docs/rules/latin-ids.md"
                });
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "Identifier": latinTest
        };
    }
};
