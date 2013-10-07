// js/app.js

var app = app || {},
	ENTER_KEY = 13;

$(function(){
	new app.AppView();

	app.router = new MyRouter();
	
	Backbone.history.start();
});