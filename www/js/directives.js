angular.module('buncisApp.directives', []).value('version', '0.1');

app.directive('resize', function($window){
  return function(scope){
    scope.width = $window.innerWidth;
    scope.height = $window.innerHeight;
    
    angular.element($window).bind('resize', function () {
      scope.$apply(function () {
          scope.width = $window.innerWidth;
        })
    })
  }
})

/*
app.directive('actionbar', function($compile){
  return function(scope, element, attrs){
    restrict : 'E',
    terminal : true,
    scope : { value: '=', windowSize: '&'}
  }

})*/