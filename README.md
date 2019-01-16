# eslint-plugin-langs

Plugin for using with multikeyboards

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-langs`:

```
$ npm install eslint-plugin-langs --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-langs` globally.

## Usage

Add `langs` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "langs"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "langs/latin-ids": 2
    }
}
```

## Supported Rules

* latin-ids





