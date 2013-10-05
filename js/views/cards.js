// js/views/cards.js

var app = app || {};

app.CardView = Backbone.View.extend({
	tagName: 'li',

	template: _.template($('#card-template').html()),

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});