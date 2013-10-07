// js/routers/myrouter.js

var app = app || {};

var MyRouter = Backbone.Router.extend({
	
	routes: {
		"about": "showAbout"
	},

	showAbout: function(){
		console.log("about");
	}

});