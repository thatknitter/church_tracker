angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })
        .when('/login', {
           templateUrl: 'views/login.html',
           controller: 'LoginController'
        })
        .when('/about', {
           templateUrl: 'views/about.html',
           controller: 'AboutController'
        });
    $locationProvider.html5Mode(true);
}]);