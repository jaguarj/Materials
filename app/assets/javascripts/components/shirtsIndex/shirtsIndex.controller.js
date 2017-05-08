angular
  .module('Materials')
  .controller('ShirtsIndexController', ShirtsIndexController)

ShirtsIndexController.$inject = ['shirtsService'];

function ShirtsIndexController(shirtsService) {
  var vm = this;

  vm.shirts = [];


  shirtsService.getShirts().then(function(resp) {
    vm.shirts = resp.data;
  });
}
