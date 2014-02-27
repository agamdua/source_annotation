angular.module('sourceanno').controller('HomeCtrl', function($scope, Repo){
    $scope.url = 'newurl.com';

    $scope.repos = Repo.all();

});
