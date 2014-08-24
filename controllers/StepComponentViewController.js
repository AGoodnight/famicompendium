app.controller('StepComponentViewController', ['$scope', '$http', function($scope, $http) {
	$http.get('../data/data_dinosaurs.json').success(function(data) {
    	console.log("success");
        $scope.dinosaurs = data.dinosaurs;
    });  
}]);
