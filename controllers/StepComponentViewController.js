app.controller('StepComponentViewController', ['$scope', '$http', function($scope, $http) {
	$http.get('../data/data_dinosaurs.json').success(function(data) {
        $scope.dinosaurs = data.dinosaurs;
        $scope.defaultSpecies = $scope.dinosaurs[0].species;
        $scope.defaultCountry = $scope.dinosaurs[0].country[0];
        $scope.defaultPeriod = $scope.dinosaurs[0].time_period;
        $scope.defaultBody = $scope.dinosaurs[0].body_type;
    });  


}]);
