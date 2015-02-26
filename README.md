# angular-eha.back-button

[![Build Status](https://magnum.travis-ci.com/eHealthAfrica/angular-eha.back-button.svg?token=9vpxqL6jTGDSPwieUDL6)](https://magnum.travis-ci.com/eHealthAfrica/angular-eha.back-button)

Angular.js Back button directive. Provides a simple interface to `window.history`.

Optionally supports transitioning to [ui.router](https://github.com/angular-ui/ui-router) states if `$state` is available as an injectable.

## Usage

## Installation

Install with npm:

    npm install --save git@github.com:eHealthAfrica/angular-eha.back-button.git

Or alternatively bower:

    bower install --save git@github.com:eHealthAfrica/angular-eha.back-button.git

Include one of the files provided in the `dist/` development bundle. You have the option of templates included and minified versions:

- *dist/angular-eha.back-button.js*
- *dist/angular-eha.back-button.min.js*
- *dist/angular-eha-back-button.template.js*
- *dist/angular-eha-back-button.template.min.js*

Then simply add `eha.back-button` as a dependency somewhere in your project.

### Example

#### JS:

```javascript
angular.module('backButtonExample', [
  'eha.back-button.directive'
]);
```

#### HTML:

```html
<html ng-app="backButtonExample">
  <head>
    <title>Back Button Example</title>
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular/angular-eha.back-button.js"></script>
  </head>
  <body>
    <eha-back-button />
  </body>
</html>
```


