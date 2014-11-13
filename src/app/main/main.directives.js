/*global angular */

angular.module('test2')
	.directive('test2Escape', function () {
		'use strict';


		return function (scope, elem, attrs) {
			elem.bind('keydown', function (event) {
				if (event.keyCode === 27) {
					scope.$apply(attrs.test2Escape);
				}
			});
		};
	});