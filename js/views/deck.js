// js/views/deck.js

var app = app || {};

app.DeckView = Backbone.View.extend({
	template: _.template($('#deck-template').html()),

	events: {
		'keypress #new-card-front': 'createOnEnter',
		'keypress #new-card-back': 'createOnEnter'
	},

	initialize: function() {
		this.$frontInput = this.$('#new-card-front');
		this.$backInput = this.$('#new-card-back');
		this.$main = this.$('#main');

		this.listenTo(app.Deck, 'add', this.addOne);
	},

	render: function(){
		this.$el.append(this.template({}));
	},

	addOne: function(card){
		var view = new app.CardView({ model: card });
		$('#deck').append(view.render().el);
	},
	
	createOnEnter: function(event){
		if(event.which !== ENTER_KEY || !this.$frontInput.val().trim() || !this.$backInput.val().trim() ){
			return;
		}

		app.Deck.create( {
			front: this.$frontInput.val(),
			back: this.$backInput.val()
		} );

		this.$frontInput.val('');
		this.$backInput.val('');
	}
});