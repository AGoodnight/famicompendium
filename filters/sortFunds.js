app.filter('sortFunds', function() {
	return function(funds, selectedFunds, isAssetClassChecked, isInvestmentFranchiseChecked) { // funds to be filtered
		return funds.filter(function (fund) {
			if (selectedFunds.length) {
				if (isAssetClassChecked && $.inArray(fund.asset_class, selectedFunds) === -1) {
					return;
				} 

				if (isInvestmentFranchiseChecked && $.inArray(fund.investment_franchise, selectedFunds) === -1) {
					return;
				}
			}
			return fund; // return filtered funds
		});
	};
});