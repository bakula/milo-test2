'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('test2'));

  beforeEach(inject(function($rootScope) {
  	scope = $rootScope.$new();
  }));

  it('should initialize rows', inject(function($controller) {
    expect(scope.rows).toBeUndefined();

    $controller('MainCtrl', {
      $scope: scope
  	});

    expect(angular.isArray(scope.rows)).toBeTruthy();
    
  }));
  
  it('should add only valid rows', inject(function($controller) {
   

    $controller('MainCtrl', {
      $scope: scope
  	});
	scope.newRow = "";
	var before = scope.rows.length;
	scope.addRow();
    expect(before===scope.rows.length).toBeTruthy();
    scope.newRow = "aaa";
	scope.addRow();
	expect(before+1===scope.rows.length).toBeTruthy();
  }));
  it('should delete selected rows', inject(function($controller) {

    $controller('MainCtrl', {
      $scope: scope
  	});
    scope.newRow = "aaa";
	scope.addRow();
	scope.newRow = "aaa1";
	scope.addRow();
	var before = scope.rows.length;
	scope.cancel(scope.rows[0]);
	expect(before===scope.rows.length+1).toBeTruthy();
	expect(scope.rows[0].txt==="aaa").toBeTruthy();
  }));
});
