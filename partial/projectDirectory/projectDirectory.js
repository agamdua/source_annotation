angular.module("sourceanno").controller( 'ProjectDirectoryCtrl', function ($scope, $location) {
    $scope.message = "We're here";
    $scope.urlname = $location.url();

})
