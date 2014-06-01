angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('GamesCtrl', function($scope, MyGames) {
  $scope.games = MyGames.getAllGames();
  $scope.newGame = {};
  $scope.addGame = function() {
		$scope.games.push($scope.newGame);
  };
})

.controller('GameCtrl', function($scope, $stateParams, $filter, MyGames) {
	$scope.games = MyGames.getAllGames();
	$scope.gameId = $stateParams.gameId;
	$scope.game = $filter('getById')($scope.games, $scope.gameId);
})

// .controller('NewGameCtrl', function($scope, MyGames) {
// 	$scope.newGame = {};
// 	$scope.games = MyGames.getAllGames();
// 	//$scope.sports = Sports.getAllSports();
// 	$scope.addGame = function() {
// 		$scope.games.push($scope.newGame);
// 	};
// })

