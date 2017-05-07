angular
	.module('Materials')
	.factory('commentsService', commentsService);

commentsService.$inject = ['$http'];

function commentsService($http) {
	var service = {};

	service.getComments = getComments;
	service.getComment = getComment;
	service.createComment = createComment;
	service.updatedComment = updatedComment;

	return service;

	function getComments() {
		return $http.get('/api/comments');
	}

	function getComment(id) {
		return $http.get('/api/comments' + id);
	}

	function createComment(comment) {
		return $http.post('/api/comments/', comment);
	}

	function updateComment(comment) {
		return $http.put('/api/comments/' + comment.id, comment);
	}
}
