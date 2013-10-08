// js/routers/myrouter.js

var app = app || {};

var MyRouter = Backbone.Router.extend({
	
	routes: {
		'deckeditor': 'showDeckEditor',
		'home': 'defaultRoute',
		'*actions': 'defaultRoute'
	},

	showDeckEditor: function(){
		app.showView(new app.DeckView());
	},

	defaultRoute: function(){
		app.showView(new app.HomeView());
	}

});