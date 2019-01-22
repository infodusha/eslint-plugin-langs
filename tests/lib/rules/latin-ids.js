/**
 * @fileoverview Only latin letters can be used in identifiers
 * @author kindcoder
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/latin-ids"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("latin-ids", rule, {

    valid: [
        {
            code: "var aGe = 1;"
        }
    ],

    invalid: [
        {
            code: "var возРаст = 1;",
            errors: [{
                message: "Unexpected no-latin letters: возРаст\r\n                             ^^^^^^^",
                type: "Identifier"
            }]
        }
    ]
});

ruleTester.run("latin-ids-single", rule, {

    valid: [
        {
            code: "var age = 1;"
        }
    ],

    invalid: [
        {
            code: "var agе = 1;",
            errors: [{
                message: "Unexpected no-latin letters: agе\r\n                               ^",
                type: "Identifier"
            }]
        }
    ]
});

ruleTester.run("latin-ids-multiple", rule, {

    valid: [
        {
            code: "var age = 1;"
        }
    ],

    invalid: [
        {
            code: "var аgе = 1;",
            errors: [{
                message: "Unexpected no-latin letters: аgе\r\n                             ^ ^",
                type: "Identifier"
            }]
        }
    ]
})
