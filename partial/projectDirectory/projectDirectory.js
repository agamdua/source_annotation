angular.module("sourceanno").controller( 'ProjectDirectoryCtrl', function ($scope, $location, Repo) {
    $scope.message = "We're here";
    $scope.urlname = $location.url();
    $scope.folders = Repo.get();

});
