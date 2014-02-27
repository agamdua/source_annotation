angular.module('sourceanno', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('sourceanno').config(function($routeProvider) {

    $routeProvider
    /* Add New Routes Above */
    .when('/', {
        templateUrl: 'partial/home/home.html',
        controller: 'HomeCtrl' // This is a constructor, which usually have CamelCase  notation
    })
    .when('/projects/:name', {
        templateUrl: 'partial/projectDirectory/projectDirectory.html',
        controller: 'ProjectDirectoryCtrl'
    })
    .otherwise({redirectTo:'/home'});

});

angular.module('sourceanno').run(function($rootScope) {

	$rootScope.safeApply = function(fn) {
		var phase = $rootScope.$$phase;
		if (phase === '$apply' || phase === '$digest') {
			if (fn && (typeof(fn) === 'function')) {
				fn();
			}
		} else {
			this.$apply(fn);
		}
	};

});
