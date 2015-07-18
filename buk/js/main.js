(function(window){
	var imgLoad = imagesLoaded("#containerbuk");

	imgLoad.on( 'done', function( instance ) {
		$('#preloader').delay(300).fadeOut('slow');
	});
})(window);

$(document).ready(function(){
	
	Page.init();
	
	$("#hello").interactive_bg();
					
	Grid.init();

		
	$('#contact-textarea').blur(function() {
		contactTextarea = $('#contact-textarea');
		if(contactTextarea.val().length != 0) {
			contactTextarea.css("padding", "10px");
			contactTextarea.css("border-bottom-width", "4px");
			if(contactTextarea.hasClass('textarea-border-color-1')){
				contactTextarea.css("border-color", "hsl(200, 100%, 50%)");
			}else if(contactTextarea.hasClass('textarea-border-color-2')){
				contactTextarea.css("border-color", "hsl(160, 100%, 50%)");
			}else if(contactTextarea.hasClass('textarea-border-color-3')){
				contactTextarea.css("border-color", "hsl(20, 100%, 50%)");
			}
		}
	});
			
				
	var doughnutData = [
		{
			value: 70,
			color:"#000000"
		},
		{
			value : 30,
			color : "#ecf0f1"
		}
	];
				
	var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData, {segmentShowStroke : false});
							
	var doughnutData = [
		{
			value: 55,
			color:"#000000"
		},
		{
			value : 45,
			color : "#ecf0f1"
		}
	];
				
	var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData, {segmentShowStroke : false});
							
	var doughnutData = [
		{
			value: 90,
			color:"#000000"
		},
		{
			value : 10,
			color : "#ecf0f1"
		}
	];
				
	var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData, {segmentShowStroke : false});
	
});
		
			
(function() {
	// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	if (!String.prototype.trim) {
		(function() {
			// Make sure we trim BOM and NBSP
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
		})();
	}

	[].slice.call( document.querySelectorAll( 'input.input-field' ) ).forEach( function( inputEl ) {
		// in case the input is already filled..
			if( inputEl.value.trim() !== '' ) {
				$(inputEl.parentNode).addClass('input-filled');
			}

			// events:
				inputEl.addEventListener( 'focus', onInputFocus );
				inputEl.addEventListener( 'blur', onInputBlur );
	} );

	function onInputFocus(ev) {		
		$(ev.target.parentNode).addClass('input-filled');
	}

	function onInputBlur(ev) {
		if( ev.target.value.trim() === '' ) {
			$(ev.target.parentNode).removeClass('input-filled');
		}
	}
})();
