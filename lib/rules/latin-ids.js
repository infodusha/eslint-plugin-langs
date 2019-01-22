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
            url: "https://github.com/infodusha/eslint-plugin-langs/tree/master/docs/rules/latin-ids.md"
        },
        schema: []
    },

    create: function(context) {

        function latinTest(node) {
            if(/[^a-z0-9_$]/i.test(node.name)) {
                let noLatin = /[^a-z0-9_$]/ig;
                let pointers = ' '.repeat(29);
                let res;
                let gone = 0;
                while((res = noLatin.exec(node.name)) !== null) {
                    pointers += ' '.repeat(res.index - gone);
                    pointers += '^';
                    gone = res.index + 1;
                }
                context.report({
                    node: node,
                    message: "Unexpected no-latin letters: {{ name }}\r\n{{ pointers }}",
                    data: {
                        name: node.name,
                        pointers: pointers,
                    }
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
}
