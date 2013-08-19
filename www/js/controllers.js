angular.module('buncisApp.controllers', []).value('version', '0.1');

var points = [
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
]

function MainController($scope, $http, navigation, actionbars){
  navigation.clear()

  $scope.points = points
  $scope.push = function (path) {
    navigation.push(path);
  };

  $scope.refresh = function(){

    $http.post('http://dev.rockybars.com:3000/hello', { 'foo' : 'bar'}).success(function(data, status, headers, config){
      console.log(status)
      points.push(data)
    })

  }
}

function AddPointController($scope, navigation, actionbars){
  $scope.pop = function () {
    navigation.pop();
  };
}

function EditPointController($scope, navigation, actionbars){
  $scope.pop = function () {
    navigation.pop();
  };
}

function AccountController($scope, navigation, actionbars){
  $scope.pop = function () {
    navigation.pop();
  };
}

function SettingsController($scope, navigation, actionbars){
  $scope.pop = function () {
    navigation.pop();
  };
}