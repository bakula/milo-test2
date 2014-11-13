"use strict";angular.module("test2",["ngRoute"]).config(["$routeProvider",function(n){n.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("test2").controller("MainCtrl",["$scope","test2Storage","$filter",function(n,t,e){function o(){n.anyDone=e("filter")(n.rows,{done:!0}).length>0,t.put(n.rows)}n.rows=t.get(),n.anyDone=e("filter")(n.rows,{done:!0}).length>0,n.clearInput=function(){n.newRow=""},n.addRow=function(){n.newRow.trim().length>0&&(n.rows.push({txt:n.newRow,done:!1}),o(),n.clearInput())},n.done=function(n){n.done=!0,o()},n.undone=function(n){n.done=!1,o()},n.cancel=function(t){n.rows.splice(n.rows.indexOf(t),1),o()},n.removeAllDone=function(){e("filter")(n.rows,{done:!0}).filter(function(t){n.rows.splice(n.rows.indexOf(t),1)})}}]),angular.module("test2").factory("test2Storage",function(){var n="test2StorageRandom6746327842387423657233456";return{get:function(){return JSON.parse(localStorage.getItem(n)||"[]")},put:function(t){localStorage.setItem(n,JSON.stringify(t))}}}),angular.module("test2").directive("test2Escape",function(){return function(n,t,e){t.bind("keydown",function(t){27===t.keyCode&&n.$apply(e.test2Escape)})}}),function(n){try{n=angular.module("test2")}catch(t){n=angular.module("test2",[])}n.run(["$templateCache",function(n){n.put("app/main/main.html",'<div class="container-float"><div class="jumbotron text-center"><h1>ToDo</h1><form ng-submit="addRow()"><input id="addRow" type="text" class="form-control" placeholder="What needs to be done?" ng-model="newRow" test2-escape="clearInput()" \\=""></form><button class="btn btn-danger " ng-click="removeAllDone()" ng-show="anyDone">remove all done</button></div><section class="list-group" id="list"><div class="list-group-item" ng-repeat="row in rows"><div class="row"><span class="col-lg-10 col-xs-12" ng-class="{done:row.done}">{{row.txt}}</span> <span class="col-lg-2 col-xs-12 text-right"><button class="btn btn-primary btn-xs" ng-click="done(row)" ng-show="!row.done">done</button> <button class="btn btn-info btn-xs" ng-click="undone(row)" ng-show="row.done">undone</button> <button class="btn btn-danger btn-xs" ng-click="cancel(row)">remove</button></span></div></div></section><hr><div class="footer"><p>kb</p></div></div>')}])}(),function(n){try{n=angular.module("test2")}catch(t){n=angular.module("test2",[])}n.run(["$templateCache",function(n){n.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></nav>')}])}();