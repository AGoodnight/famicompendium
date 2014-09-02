app.directive('onFinishRender', function($timeout) {
	return {
		restrict: 'A',
		scope: true,
		link: function (scope, element, att) {
			if (scope.$last === true) {
				element.ready(function () {
					setTimeout(function(){$('.stepsComponent').equalHeights();}, 50);
				});
			}
		}
	}
});