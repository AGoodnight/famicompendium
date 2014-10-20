app.controller('StepComponentViewController', ['$scope', '$http', 'DinoData', function($scope, $http, DinoData) {
	$scope.Dinosaurs = DinoData.getDinosaurs();  
}]);

app.filter('unique', function() {
   return function(collection, category) {
      var output = [], 
          keys = [];

		if (category === 'country') {
			var $countArr = collection[1].country;
		
			for (var x=0; x<$countArr.length; x++) { // this loop removes repeated values from the drop downs
				var countryVal = $countArr[x];
				if (keys.indexOf(countryVal) === -1) {
					keys.push(countryVal);

					if (output.indexOf(countryVal) === -1) {
						output.push(collection[1]);
					}
				}
			}
		} 
	// else {
	// 	angular.forEach(collection, function(item) { // this loop removes repeated values from the drop downs
	// 		var itemCategory = item[category];
	// 		if (keys.indexOf(itemCategory) === -1) {
	// 			keys.push(itemCategory);
	// 			output.push(item);
	// 		}
	// 	});
	// }

	  console.log("keys", keys, "output", output);

      return output;
   };
});