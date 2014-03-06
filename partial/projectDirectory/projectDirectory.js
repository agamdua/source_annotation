angular.module("sourceanno").controller('ProjectDirectoryCtrl', function ($scope, $location, $http, Repo) {
	$scope.message = "We're here";
	$scope.data = {message:"This is some data"};
	$scope.urlname = $location.url();
    // $scope.folders = Repo.get();
    $scope.items = [];
    $http.get('https://api.github.com/repos/agamdua/StarkMail/contents')
    .success (function (data) {
		$scope.items = data; // TODO: Look at interceptors to strip out unnecceary content
    });
});
