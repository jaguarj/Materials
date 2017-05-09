angular
	.module('Materials')
	.controller('ShirtsShowController', ShirtsShowController)

ShirtsShowController.$inject = ['$stateParams', 'shirtsService'];

function ShirtsShowController($stateParams, shirtsService) {
	var vm = this;

	vm.shirt = {};

	shirtsService.getShirt($stateParams.id).then(function(resp) {
		vm.shirt = resp.data;
	});
}



