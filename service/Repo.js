angular.module('sourceanno').factory('Repo',function() {

	var Repo = {
		all: function () {
			return [
				{ name: 'repo1', comments:105, url:'url1'}, 
				{ name: 'repo2', comments:15, url:'url2'},
				{ name: 'repo3', comments:150, url:'url3'},
				{ name: 'repo4', comments:172, url:'url3'}
			];
		}
	};


	return Repo;
});
