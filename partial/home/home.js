angular.module('sourceanno').controller('HomeCtrl',function($scope){
    $scope.url = 'newurl.com';

    $scope.repos = [ 
        { name: 'repo1', comments:105, url:'url1'}, 
        { name: 'repo2', comments:15, url:'url2'}
        { name: 'repo3', comments:150, url:'url3'},
        { name: 'repo4', comments:172, url:'url3'}
});
