// js/collections/cards.js

var app = app || {};

var CardList = Backbone.Collection.extend({

	model: app.Card,
});

app.Cards = new CardList();