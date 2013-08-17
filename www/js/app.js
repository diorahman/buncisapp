var app = angular.module('buncisApp',
  ['ajoslin.mobile-navigate','ngMobile', 'buncisApp.services', 'buncisApp.controllers']
);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/',
  {
    controller: 'MainController',
    templateUrl: 'views/main.html'
  })
  .when('/add-point', {
    controller: 'AddPointController',
    templateUrl: 'views/add-point.html'
  })
  .when('/account', {
    controller: 'AccountController',
    templateUrl: 'views/account.html'
  })
  .when('/settings', {
    controller: 'SettingsController',
    templateUrl: 'views/settings.html'
  })
  .otherwise({ redirectTo: '/'});
})