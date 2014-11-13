'use strict';

/**
 * Services that persists and retrieves data from localStorage
*/
angular.module('test2').factory('test2Storage', function () {
	var ID = 'test2StorageRandom6746327842387423657233456';

	return {
		get: function () {
			return JSON.parse(localStorage.getItem(ID) || '[]');
		},

		put: function (data) {
			localStorage.setItem(ID, JSON.stringify(data));
		}
	};
});