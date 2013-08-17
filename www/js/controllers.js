angular.module('buncisApp.controllers', []).value('version', '0.1');

function MainController($scope, navigation, actionbars){
  navigation.clear()
  $scope.push = function (path) {
    navigation.push(path);
  };
}

function AddPointController($scope, navigation, actionbars){
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