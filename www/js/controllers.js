angular.module('buncisApp.controllers', []).value('version', '0.1');

var points = [
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'},
  {title : 'Pantai Kuta', description: 'This is pantai kuta', author: 'Joni Iskandar', timestamp: 'Sat Aug 17 2013 11:29:18'}

]

function MainController($scope, navigation, actionbars){
  navigation.clear()

  $scope.points = points
  $scope.push = function (path) {
    navigation.push(path);
  };
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