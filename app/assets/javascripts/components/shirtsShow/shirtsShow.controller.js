angular
	.module('Materials')
	.controller('ShirtsShowController', ShirtsShowController)

ShirtsShowController.$inject = ['$state', 'shirtsService'];

function ShirtsShowController($state, shirtsService) {
	var vm = this;

	vm.shirt = {};

	shirtsService.getShirt($stateParams.id).then(function(resp) {
		vm.shirt = resp.data;
	});
}



