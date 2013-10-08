// js/views/cards.js

var app = app || {};

app.CardView = Backbone.View.extend({
	tagName: 'li',

	events: {
		'click .destroy': 'clear',
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter'
	},

	template: _.template($('#card-template').html()),

	initialize: function(){
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'change', this.render);
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));

		this.$frontInput = this.$('.edit.front');
		this.$backInput = this.$('.edit.back');
		return this;
	},

	clear: function(){
		this.model.destroy();
	},

	edit: function(){
		this.$el.addClass('editing');
		this.$input.focus();
	},

	updateOnEnter: function(e){
		if(e.which !== ENTER_KEY){
			return;
		}

		if(this.$frontInput.val().length === 0 || this.$backInput.val().length === 0){
			this.model.destroy();
		} else {
			this.model.save({
				front: this.$frontInput.val(),
				back: this.$backInput.val()
			});
		}

		this.$el.removeClass('editing');
	}

});