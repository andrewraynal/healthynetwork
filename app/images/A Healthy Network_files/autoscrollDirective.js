angular.module('ahealthynetworkApp.directives', []);
    app.directive('autoScroll', function($timeout) {
    return function(scope, elements, attrs) {
      scope.$watch("messages.length", function() {
        $timeout(function() {
          elements[0].scrollTop = elements[0].scrollHeight
        });
      });
    }
  });