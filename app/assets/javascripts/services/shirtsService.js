angular
	.module('Materials')
	.factory('shirtsSevice', shirtsSevice);

shirtsSevice.$inject = ['$http'];

function shirtsSevice($http) {
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

	function updatedShirt(shirt) {
		return $http.put('/api/shirts/' + shirt.id, shirt);
	}
}
