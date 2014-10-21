'use strict';

app.controller('StepComponentViewController', ['$scope', '$http', 'DinoData', function($scope, $http, DinoData) {
	$scope.Dinosaurs = DinoData.getDinosaurs();  
}]);

app.controller('Test', ['$scope', '$http', 'DinoData', function($scope, $http, DinoData) {
	$scope.dinosaurs = DinoData.getDinosaurs(); 
	$scope.selectedDinos = $scope.dinosaurs[0];
}]);

app.filter('unique', function() {
	return function (dinosaurs) {
		var filtered = [];

		for (var x=0; x < dinosaurs.length; x++) {
			filtered.forEach(function(item) {
				return item;
			});
		}
	}
});