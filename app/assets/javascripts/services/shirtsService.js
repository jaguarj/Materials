angular
	.module('Materials')
	.factory('shirtsService', shirtsService);

shirtsService.$inject = ['$http'];

function shirtsService($http) {
	var service = {};

	service.getShirts = getShirts;
	service.getShirt = getShirt;
	service.createShirt = createShirt;
	service.updateShirt = updateShirt;

	return service

	function getShirts() {
		return $http.get('/api/shirts');
	}

	function getShirt(id) {
		return $http.get('/api/shirts/' + id);
	}

	function createShirt(shirt) {
		return $http.post('/api/shirts/', shirt);
	}

	function updateShirt(shirt) {
		return $http.put('/api/shirts/' + shirt.id, shirt);
	}
}
