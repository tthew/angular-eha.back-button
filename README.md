# angular-eha.back-button

[![Build Status](https://magnum.travis-ci.com/eHealthAfrica/angular-eha.back-button.svg?token=9vpxqL6jTGDSPwieUDL6)](https://magnum.travis-ci.com/eHealthAfrica/angular-eha.back-button)

Angular.js `<eha-back-button />` Back button directive. Provides a simple interface to `window.history`.

Optionally supports transitioning to [ui.router](https://github.com/angular-ui/ui-router) states if `$state` is available as an injectable and a valid state name is passed as an attribute, you can even pass parameters e.g. 

```html
<eha-back-button state="validState" params="someParams"/>
```


## Usage

## Installation

Install with npm:

    npm install --save git@github.com:eHealthAfrica/angular-eha.back-button.git

Or alternatively bower:

    bower install --save git@github.com:eHealthAfrica/angular-eha.back-button.git

The distribution bundle comes in 2 flavours, one with templates, one without - as well as providing both minified and unminfied versions of both, take your pick:

- *dist/angular-eha.back-button.js*
- *dist/angular-eha.back-button.min.js*
- *dist/angular-eha-back-button.template.js*
- *dist/angular-eha-back-button.template.min.js*

Then simply add `eha.back-button` as a dependency somewhere in your project that makes sense and you're ready to time travel.

### Example

```html
<html ng-app="backButtonExample">
  <head>
    <title>Back Button Example</title>
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular/angular-eha.back-button.js"></script>
    <script>
    angular.module('backButtonExample', [
        'eha.back-button.directive'
    ]);
    </script>
  </head>
  <body>
    <eha-back-button />
  </body>
</html>
```

## Contributing

### Installation

#### Prerequisites 

- Firefox (for running test suite)
- node (0.12.0)
- bower (1.3.12)
- grunt-cli (0.1.7)
- grunt (0.4.5)


```bash
git clone git@github.com:yourusername/angular-eha.back-button.git
cd angular-eha.back-button.git
npm install
```

### Docs

Code should be documented following the guidelines set out by [jsdoc](http://usejsdoc.org/) and [ngdoc](https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation). We can then leverage [Dgeni](http://github.com/angular/dgeni) or something simlary to generate documentation in any format we like.

```bash
http-server docs/build
```

### Test Suite

The test suite is configured to run in Firefox and is powered by:

- Karma
- Mocha
- Chai (as promised)
- Sinon (chai)

The library is conducive to TDD.  `grunt test:watch` is your friend. As modules (and templates) are exposed on their own namespaces you can easily isolate areas of the codebase for true unit testing without being forced to pull in the whole library or stub/mock modules irrelevent to the feature(s) you're testing.


### Transpiling templates (html2js)

Transpiling our html templates into js allows us to neatly push them into the `$templateCache`. Just include the `templates/angular-eha.templates.js` file in your app.  Each template is exposed on their own module, in the pattern `templates/{namespace}/{module}/{feature}.tpl.html` as well as being exposed on the `eha.common.templates` namespace.

To transpile the templates it's another simple grunt command:

```bash
grunt templates
```

### Distribution bundle



