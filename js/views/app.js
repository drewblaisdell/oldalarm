// js/views/app.js

var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#cards-app',

	events: {
		'keypress #new-card': 'createOnEnter'
	},

	initialize: function() {
		this.$input = this.$('#new-card');
		this.$main = this.$('#main');

		this.listenTo(app.Cards, 'add', this.addOne);
	},

	addOne: function(card){
		var view = new app.CardView({ model: card });
		$('#cards-list').append(view.render().el);
	},
	
	createOnEnter: function(event){
		if(event.which !== ENTER_KEY || !this.$input.val().trim() ){
			return;
		}

		app.Cards.create( { front: this.$input.val() });
		this.$input.val('');
	}
});