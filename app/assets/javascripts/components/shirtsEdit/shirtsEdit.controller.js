angular
	.module('Materials')
	.controller('ShirtsEditController', ShirtsEditController);

ShirtsEditController.$inject = ['$stateParams', '$state', 'shirtsService' ];

function ShirtsEditController($stateParams, $state, shirtsService) {
	var vm this;

	vm.shirt = {};

	vm.saveShirt = saveShirt;

	shirtsService.getShirt($stateParams.id).then(function(resp) {
		vm.shirt = resp.data;
	});

	function saveShirt() {
		shirtsService.updateShirt(vm.shirt).then(function(resp) {
			if(resp.status == 200) {
				$state.go('shirtsShow', { id: resp.data.id })
			}
			else {
				alert('Error: Could not update shirt!')
			}
		});
	}
}



