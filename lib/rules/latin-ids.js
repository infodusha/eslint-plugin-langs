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
            category: "Possible Errors"
        },
        schema: []
    },

    create: function(context) {

        function latinTest(node) {
            if(!/^[A-Za-z]{1}[A-Za-z1-9]*$/.test(node.name)) {
                context.report({
                    node: node,
                    message: "Unexpected no-latin identifier: {{ identifier }}",
                    data: {
                        identifier: node.name
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
