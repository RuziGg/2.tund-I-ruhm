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
		
		// Koik muutujad mida muudetakse ja on rakendusega seotud defineeritakse siin
		this.click_count = 0;
		console.log(this);
		
		// Kui tahan Moosipurgile referenci siis kasitan THIS = MOOSIPURGI RAKENDUS ISE
		this.init();
		
	};
	
	window.Moosipurk = Moosipurk; // Paneme muutja kulge
	
	// Koik funktsioonid lahevad Moosipurgi kulge
	Moosipurk.prototype = {
		
		init: function(){
			console.log('Rakendus laks toole');
			
			// Esimene Loogika oleks see, et kuulame hiireklikki nupul
			this.bindMouseEvent();
			
		},
		
		bindMouseEvent: function(){
			
			document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));
			
		},
		
		addNewClick: function(event){
			
			console.log(event);
			this.click_count++;
			console.log(this.click_count);
			
		}
		
	};
	
	// kui leht laetud kaivitan Moosipurgi rakenduse
	window.onload = function(){
		
	var app = new Moosipurk();
	
	}
	
	
})();