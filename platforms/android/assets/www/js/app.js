var app = angular.module('buncisApp',['ajoslin.mobile-navigate','ngMobile', 'buncisApp.services']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/',
  {
    controller: 'MainController',
    templateUrl: 'views/main.html'
  })
  .when('/next', {
    controller: 'NextController',
    templateUrl: 'views/next.html'
  })
  .otherwise({ redirectTo: '/'});
})

function MainController($scope, navigation){
  navigation.clear()
  $scope.push = function (path) {
    navigation.push(path);
  };
}
function NextController($scope, navigation){

  $scope.pop = function () {
    navigation.pop();
  };
}