app.controller('StepComponentViewController', ['$scope', '$http', 'DinoData', function($scope, $http, DinoData) {
	$scope.Dinosaurs = DinoData.getDinosaurs();  

	// $scope.countries = []
	// 	angular.forEach($scope.Dinosaurs, function(value, country) {
	// 		if ($scope.countries.indexOf(value.country) === -1) {
	// 			$scope.genres.push(value.country);
	// 		}
	// 	});

	$scope.$on('ngRepeatFinished', function() {
		console.log('ng repeat finished');
	    
	});
}]);