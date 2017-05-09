angular
	.module('Materials')
	.factory('usersService', usersService);

usersService.$inject = ['$http'];

function usersService($http) {
	var service = {};

	service.getUser = getUser;

	return service

	function getUser(id) {
		return $http.get('/api/users/' + id);
	}
}
