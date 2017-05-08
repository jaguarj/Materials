angular
  .module('Materials')
  .controller('ShirtsNewController', ShirtsNewController)

ShirtsNewController.$inject = ['$state', 'shirtsService'];

function ShirtsNewController($state, shirtsService) {
	var vm = this;

	vm.shirt = {
		name: '',
		image: '',
		bio: '',
		url: '',
		user_id: '',
		comment_id: '',
		favorite_id: ''
	};

	vm.saveShirt = saveShirt;
}






// NotesNewController.$inject = ['$state', 'notesService'];

// function NotesNewController($state, notesService) {
//   var vm = this;

//   vm.note = {
//     title: '',
//     body: '',
//     category: ''
//   };

//   vm.saveNote = saveNote;

//   function saveNote() {
//     notesService.createNote(vm.note).then(function(resp) {
//       if(resp.status == 201) {
//         $state.go('notesShow', { id: resp.data.id })
//       } else {
//         alert('Something went wrong when trying to create')
//       }
//     });
//   }
// }
