'use strict';

angular.module('test2')
  .controller('MainCtrl', function ($scope,test2Storage,$filter) {
	function save(){
		$scope.anyDone = $filter('filter')($scope.rows, {done: true}).length>0;
		test2Storage.put($scope.rows);
	}
	$scope.rows = test2Storage.get();
	$scope.anyDone = $filter('filter')($scope.rows, {done: true}).length>0;
	$scope.clearInput = function(){
		$scope.newRow = "";
	}
    $scope.addRow = function(){
		if($scope.newRow.trim().length>0){
			$scope.rows.push({txt:$scope.newRow,done:false});
			save();
			$scope.clearInput();
		}
	}
	$scope.done = function(row){
		row.done = true;
		save();
	}
	$scope.undone = function(row){
		row.done = false;
		save();
	}
   $scope.cancel = function(row){
		$scope.rows.splice($scope.rows.indexOf(row), 1);
		save();
	}
	$scope.removeAllDone = function(){
		$filter('filter')($scope.rows, {done: true}).filter(function(row){
			$scope.rows.splice($scope.rows.indexOf(row), 1);
		})
	}
  });
