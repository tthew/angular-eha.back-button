describe('<eha-back-button></eha-back-button> Directive', function() {
  'use strict';

  var $state, $scope, $window, $compile;

  $state = {
    go: function() {}
  };

  $window = {
    history: {
      back: function() {}
    }
  };

  beforeEach(module('templates/back-button.directive.tpl.html'));
  beforeEach(module('eha.common.backButton.directive.backButton', function($provide) {
    $provide.value('$state', $state);
    $provide.value('$window', $window);
    $provide.value('$log', {});
  }));

  beforeEach(inject(function(_$rootScope_, _$compile_, _$templateCache_, _$httpBackend_) {
    $scope = _$rootScope_;
    $compile = _$compile_;

    sinon.spy($state, 'go');
    sinon.spy($window.history, 'back');

    _$httpBackend_
      .expectGET('templates/back-button.directive.tpl.html')
      .respond();
  }));

  afterEach(function() {
    // Unwrap spies
    $state.go.restore();
    $window.history.back.restore();
  });

  describe('state explicitly defined', function() {
    it('should go to explicitly defined state', function() {
      var el = angular.element('<eha-back-button state="some-state"></eha-back-button>');
      $compile(el)($scope);
      $scope.$digest();
      el.find('button')[0].click();
      expect($state.go).to.have.been.calledWith('some-state', {});
    });

    it('should handle simple parameters', function() {
      var el = angular.element("<eha-back-button state='my-state' params='{\"firstParam\":\"just a string\"}'></eha-back-button>");
      $compile(el)($scope);
      $scope.$digest();
      el.find('button')[0].click();
      var expectedParams = {
        firstParam: 'just a string'
      };
      expect($state.go).to.have.been.calledWith('my-state', expectedParams);
    });

    it('should handle complex parameters', function() {
      var params = '{\"firstParam\":\"just a string\",\"secondParam\":{\"key\": \"value\"}}';
      var el = angular.element("<eha-back-button state='my-state' params='" + params + "'></eha-back-button>");
      $compile(el)($scope);
      $scope.$digest();
      el.find('button')[0].click();
      var expectedParams = {
        firstParam: 'just a string',
        secondParam: '{"key":"value"}'
      };
      expect($state.go).to.have.been.calledWith('my-state', expectedParams);
    });
  });

  describe('Fall back to window.history', function() {
    beforeEach(function() {
      $state.$previous = undefined;
    });
    it('should fall back to window.history if no previous state is found', function() {
      var el = angular.element('<eha-back-button></eha-back-button');
      $compile(el)($scope);
      $scope.$digest();
      el.find('button')[0].click();
      expect($window.history.back).to.have.been.calledWith(-1);
    });
  });
});
