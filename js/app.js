// js/app.js

var app = app || {},
	conn;

// thanks to Derick Bailey for this close function
Backbone.View.prototype.close = function(){
	this.remove();
	this.unbind();
	if (this.onClose){
		this.onClose();
	}
}

app.showView = function(view){
	if(this.currentView){
		this.currentView.close();
	}

	this.currentView = view;
	this.currentView.render();

	$('#main').html(this.currentView.el);
};

$(function(){
	app.router = new MyRouter();
	Backbone.history.start();
	
});