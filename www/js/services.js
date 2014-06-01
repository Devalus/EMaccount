angular.module('starter.services', [])

.factory('MyGames', function(){
		return {
			getAllGames: function() {
				return [
		    		{ "name": "game1", "owner": "user1", "sport": "football",  "date": "20/05/2014", "id": "1" },
		    		{ "name": "game2", "owner": "user2", "sport": "biking",  "date": "22/05/2014", "id": "2" },
		    		{ "name": "game3", "owner": "user3", "sport": "jogging",  "date": "24/05/2014", "id": "3" },
		    		{ "name": "game4", "owner": "user4", "sport": "basketball",  "date": "24/05/2014", "id": "4" },
		    		{ "name": "game5", "owner": "user5", "sport": "football",  "date": "02/06/2014", "id": "5" },
		    		{ "name": "game6", "owner": "user6", "sport": "jogging",  "date": "10/11/2014", "id": "6" }
				];
			}	
		};
	});


/*.factory('MyUsers', function(){
		return {
			getAllUsers: function() {
				return [
		    		{ "name": "user1", "address": "Lyon", "rayon": "3", "id": "1" },
		    		{ "name": "user2", "address": "Rabat", "rayon": "4", "id": "2" }
				];
			}	
		};
	});*/