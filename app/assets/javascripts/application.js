// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.


//= require jquery
//= require jquery_ujs
//= require angular/angular
//= require angular-ui-router/release/angular-ui-router
//= require angular-socialshare/dist/angular-socialshare
//= require_self
//= require_tree .


angular
	.module('Materials', ['ui.router', '720kb.socialshare'])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider

			.state('shirts', {
				url: '/shirts',
				component: 'shirtsIndex'
			})

			.state('shirtsNew', {
				url: '/shirts/new',
				component: 'shirtsNew'
			})

			// make state for shirtsShow

			.state('shirtsShow', {
				url: '/shirts/:id',
				component: 'shirtsShow'
			})

			.state('shirtsEdit', {
				url: '/shirts/:id/edit',
				component: 'shirtsEdit'
			})

			.state('comments', {
				url: '/comments',
				component: 'commentsPage'
			})

			.state('users', {
				url: '/users/:id',
				component: 'usersShow'

			})




	// Fallback router
	$urlRouterProvider.otherwise('/shirts');

	// Enable HTML5 Mode for SEO
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});



