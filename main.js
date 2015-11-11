/*var my_client_id = '9049596da5304cf0a1477f4ffbdca4c0'; // Your client id
var my_secret = '35b66a992d4b4d7e92ec51be51eeb147'; // Your secret
var redirect_uri = 'https://localhost:8080'; // Your redirect uri */
var url = 'https://api.spotify.com/v1/search?type=track&query='
var myApp = angular.module('myApp', []);
myApp.controller('mainController', function($scope,$http) {
	$scope.audioObject = {}
	$scope.menu = false;
	$scope.bartender = false;
	$scope.getSongs = function(){
		$http.get(url + $scope.track).success(function(response){
		$scope.tracks = response.tracks.items
		});
	};
	$scope.play = function(song) {
		console.log(song == $scope.currentSong)
		if($scope.currentSong == song) {
			console.log($scope.currentSong)
			$scope.audioObject.pause()
			$scope.currentSong = false
			return
		}
		else{
			if($scope.audioObject.pause != undefined) $scope.audioObject.pause()
				$scope.audioObject = new Audio(song)
				$scope.audioObject.play()
				$scope.currentSong = song
		}
	}
	$scope.toggle = function(){
		$scope.menu = true;
		$scope.bartender= true;
	}
});
