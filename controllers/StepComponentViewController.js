app.controller('StepComponentViewController', ['$scope', '$http', 'DinoData', function($scope, $http, DinoData) {
	$scope.Dinosaurs = DinoData.getDinosaurs();  
}]);

app.filter('unique', function() {
   return function(collection, category) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {

			var itemCategory = item[category];
			
			angular.forEach(itemCategory, function(key) {
				if (keys.indexOf(key) === -1) {
	              keys.push(key);
	              output.push(item);
	          }
			});
      });

      return output;
   };
});