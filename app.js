(function(){
	"use strict";
	
	var Moosipurk = function(){
		
		// SEE ON SINGLETON PATTERN
		if(Moosipurk.instance){
			return Moosipurk.instance;
		}
		
		//this viitab Moosipurk funktsioonina
		Moosipurk.instance = this;
		
		
		console.log('moosipurgi sees');
		
		// Kui tahan Moosipurgile referenci siis kasitan THIS = MOOSIPURGI RAKENDUS ISE
		this.init();
		
	};
	
	
	// Koik funktsioonid lahevad Moosipurgi kulge
	Moosipurk.prototype = {
		
		init: function(){
			console.log('Rakendus laks toole');
		},
		
		bindMouseEvent: function(){
			
		}
	};
	
	var app = new Moosipurk();
	
	
})();