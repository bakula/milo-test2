'use strict';

angular.module('test2')
  .controller('MainCtrl', function ($scope,test2Storage) {
	
	$scope.rows = test2Storage.get();
    $scope.addRow = function(){
		if($scope.newRow.trim().length>0){
			$scope.rows.push({txt:$scope.newRow,done:false});
			test2Storage.put($scope.rows);
			$scope.newRow = "";
		}
	}
	$scope.done = function(row){
		row.done = true;
		test2Storage.put($scope.rows);
	}
	$scope.undone = function(row){
		row.done = false;
		test2Storage.put($scope.rows);
	}
   $scope.cancel = function(row){
		$scope.rows.splice($scope.rows.indexOf(row), 1);
		test2Storage.put($scope.rows);
	}
  });
