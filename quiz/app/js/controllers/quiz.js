(function () {
	'use strict';

	angular
		.module('App')
		.controller('QuizController', QuizController);
		// main chat ctrl
	QuizController.$inject = ['$location','$scope', '$rootScope', '$state',
  '$stateParams', 'MockService',
  '$ionicPopup', '$ionicScrollDelegate', '$timeout', '$interval',
  '$ionicActionSheet', '$filter', '$ionicModal'];
	function QuizController( $location,$scope, $rootScope, $state, $stateParams, MockService,
    $ionicPopup, $ionicScrollDelegate, $timeout, $interval, $ionicActionSheet, $filter, $ionicModal) {

		// mock acquiring data via $stateParams
		$scope.toUser = {
			_id: '534b8e5aaa5e7afc1b23e69b',
			pic: 'http://www.nicholls.co/images/nicholls.jpg',
			username: 'Nicholls'
		}

		// this could be on $rootScope rather than in $stateParams
		$scope.user = {
			_id: '534b8fb2aa5e7afc1b23e69c',
			pic: 'http://ionicframework.com/img/docs/mcfly.jpg',
			username: 'Marty'
		};
		$scope.goTo = function(id){
			console.log('quiz'+id);
     $location.hash('quiz'+id);
     $ionicScrollDelegate.anchorScroll(true);
	 	}
		$scope.optlabel = ["A","B","C","D","G","E"];
		var init = function() {
			console.log('init');
			var quizs = MockService.getMockQuizs();
			$scope.quizs = quizs.data;
			console.log($scope.quizs);
		}
		$scope.setOption = function(quiz,option) {
			console.log(quiz,option);
			$scope.quizs[quiz].result = option;
			$scope.goTo(quiz+1);
		}
		//init
		init();

	}
})();
