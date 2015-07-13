/// <reference path="../../../typings/angularjs/angular.d.ts"/>
angular.module('starter.services', ['ngResource'] )
	.factory('Session',function($resource){
		return $resource('http://localhost:5000/sessions/:sessionId');
	})