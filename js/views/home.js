// js/views/home.js

var app = app || {};

app.HomeView = Backbone.View.extend({

	tagName: 'div',

	template: _.template($('#home-template').html()),

	render: function(){
		this.$el.append(this.template({}));
	},


});