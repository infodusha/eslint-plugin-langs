# Only latin letters can be used in identifiers (latin-ids)
Non-latin identifiers can confuse you with same-looking letters(but with different key codes).

## Rule Details

This rule disallows to use non-lating identifiers.

Examples of **incorrect** code for this rule:

```js

var возраст = 1;

function возраст() {
    // ...
}

```

Examples of **correct** code for this rule:

```js

var age = 1;

function age() {
    // ...
}

```

## When Not To Use It

If you really want to use non-latin identifiers
