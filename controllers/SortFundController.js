'use strict';

app.controller('SortFundController', ['$scope', '$http', 'fundData', function($scope, $http, fundData) {
	$scope.funds = fundData.getFunds();  
    $scope.selectedFunds = $scope.$root.selectedFunds = [];
    $scope.isAssetClassChecked = false;
    $scope.isInvestmentFranchiseChecked = false;
    $scope.assetClasses = [];
    $scope.investmentFranchises = [];

    $scope.funds.forEach(function(item) { // gets all the possible choice values and puts them into two arrays
        $.inArray(item.asset_class, $scope.assetClasses) === -1 ? $scope.assetClasses.push(item.asset_class) : false;
        $.inArray(item.investment_franchise, $scope.investmentFranchises) === -1 ? $scope.investmentFranchises.push(item.investment_franchise) : false;
    });

    $scope.$watchCollection('selectedFunds', function (newVal, oldVal) {
        if (!newVal) { return; }
        $scope.updateChecked(newVal);
    });

    $scope.noFilters = function() {
        $scope.isAssetClassChecked = false;
        $scope.isInvestmentFranchiseChecked = false;
    }

    $scope.clearFilters = function() {
        $scope.noFilters();
        $scope.selectedFunds = [];
    }

    $scope.updateChecked = function(currentArray) {
       $scope.noFilters();

        if (!currentArray.length) {
            $scope.noFilters();
        }

    	currentArray.forEach(function(item) {
            if ($.inArray(item, $scope.investmentFranchises) > -1) {
                $scope.isInvestmentFranchiseChecked = true;
            }            

            if ($.inArray(item, $scope.assetClasses) > -1) {
                $scope.isAssetClassChecked = true;
            }
    	});
    }

    $scope.updateSelected = function(fundType) {
    	var i = $.inArray(fundType, $scope.selectedFunds);
    	if (i > -1) {
    		$scope.selectedFunds.splice(i, 1);
    	} else {
    		$scope.selectedFunds.push(fundType);
    	}
    }
}]);