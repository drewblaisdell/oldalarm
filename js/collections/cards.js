// js/collections/cards.js

var app = app || {};

var CardList = Backbone.Collection.extend({

	model: app.Card,

	localStorage: new Backbone.LocalStorage('cards-backbone'),
});

app.Cards = new CardList();