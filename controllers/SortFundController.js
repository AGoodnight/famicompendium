'use strict';

app.controller('SortFundController', ['$scope', '$http', 'fundData', function($scope, $http, fundData) {
	$scope.funds = fundData.getFunds();  
    $scope.selectedFunds = $scope.$root.selectedFunds = [];
    $scope.isAssetClassChecked = false;
    $scope.isInvestmentFranchiseChecked = false;
    $scope.assetClasses = ["US Equity", "Non-US Equity", "Mixed Asset Class", "Alternative", "Fixed Income"];
    $scope.investmentFranchise = ["Integrity", "Munder", "Boutique Name"];

    $scope.$watchCollection('selectedFunds', function (newVal, oldVal) {
    	if (!newVal) { return; }
		$scope.updateChecked(newVal);
    });

    $scope.updateChecked = function(currentArray) {
        $scope.isAssetClassChecked = false;
        $scope.isInvestmentFranchiseChecked = false;

        if (currentArray.length === 0) {
            $scope.isInvestmentFranchiseChecked = false; 
            $scope.isAssetClassChecked = false;
        }

    	currentArray.forEach(function(item) {
            if ($.inArray(item, $scope.investmentFranchise) > -1) {
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

    $scope.fundFilter = function(funds) {
    	if ($scope.selectedFunds.length) {
    		if ($scope.isAssetClassChecked && $.inArray(funds.asset_class, $scope.selectedFunds) === -1) {
    			return;
    		} 

    		if ($scope.isInvestmentFranchiseChecked && $.inArray(funds.investment_franchise, $scope.selectedFunds) === -1) {
    			return;
    		}
    	}

    	return funds;
    }

}]);