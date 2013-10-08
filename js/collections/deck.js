// js/collections/cards.js

var app = app || {};

var Deck = Backbone.Collection.extend({

	model: app.Card,

	localStorage: new Backbone.LocalStorage('cards-backbone'),
});

app.Deck = new Deck();