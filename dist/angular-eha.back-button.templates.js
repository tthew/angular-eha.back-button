;(function() {
  'use strict';
  /**
   * @ngdoc directive
   * @name ehaBackButton
   * @module eha.backButton.directive.backButton
   * @restrict E
   * @scope
   * @element <eha-back-button />
   * @description
   *
   * Back button directive providing navigation to previous ui.router state (if
   * one exists), a specific state or falling back to `window.history`
   *
   * @example
   *
   * <example module="backButtonExample">
   *  <file name="backButtonExample.js">
   *    angular.module('backButtonExample', [
   *      'eha.common.backButton.directive.backButton',
   *      'ui.router'
   *    ]);
   *  </file>
   *  <file name="backButtonExample.html">
   *     <eha-back-button />
   *  </file>
   * </example>
   *
   * <example module="backButtonExample2">
   *  <file name="backButtonExample2.html">
   *     <eha-back-button state="stateName" />
   *  </file>
   * </example>
   *
   */
  var ngModule = angular.module('eha.common.backButton.directive.backButton', [
    'ui.router'
  ])
  .directive('ehaBackButton', ['$state', '$log', '$window', '$templateCache', function($state, $log, $window, $templateCache) {
    return {
      restrict: 'E',
      templateUrl: 'templates/back-button.directive.tpl.html',
      scope: {
        state: '@state',
        params: '@params'
      },
      link: function(scope) {
        scope.back = function() {
          // Check whether a state has been explicitly passed
          if (scope.state) {
            // Check whether a parameters attribute was set and parse to JSON
            // if so
            var params = scope.params ? JSON.parse(scope.params) : {};
            for (var key in params) {
              if (typeof params[key] === 'object') {
                params[key] = JSON.stringify(params[key]);
              }
            }

            $state.go(scope.state, params);
            // If not found, fallback to $window.history
          } else if ($window.history) {
            $window.history.back(-1);

            // No window histoy? Give up.
          } else {
            $log.error('No previous state found.');
          }
        };
      }
    };
  }]);

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

}());

angular.module('angular-eha.back-button.templates', ['templates/back-button.directive.tpl.html']);

angular.module("templates/back-button.directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/back-button.directive.tpl.html",
    "<button\n" +
    "  ng-click=\"back()\"\n" +
    "  type=\"button\"\n" +
    "  class=\"btn btn-default btn-lg btn-block\">\n" +
    "  <i class=\"fa fa-arrow-circle-left\"></i>\n" +
    "  <span translate>Back</span>\n" +
    "</button>\n" +
    "");
}]);
