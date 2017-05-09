angular
	.module('Materials')
	.controller('UsersShowController', UsersShowController)

UsersShowController.$inject = ['$stateParams', 'usersService'];

function UsersShowController($stateParams, usersService) {
	var vm = this;


	vm.user = {};
	vm.shirts = [];

	console.log($stateParams.id)
	usersService.getUser($stateParams.id).then(function(resp) {
		vm.user = resp.data;
		vm.shirts = resp.data;
		console.log(resp);
	});

}
