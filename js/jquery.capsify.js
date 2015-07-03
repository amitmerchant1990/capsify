/*!
	jQuery Capsify v1.0
	(c) 2013 Amit Merchant
	updated: 2015-07-03
	license: MIT
	http://amitmerchant1990.github.io/urlcolorup
*/
(function($){
 
 	var caps;

    $.fn.capsify = function(options) {

    	//Added options
    	var settings = $.extend({
            isCapsON : "Yes",
        }, options );

    	$(this).keyup(function(){
	    	if($(this).val()!=''){
	    		if(settings.isCapsON == 'Yes'){
		    		caps = $(this).val().toUpperCase();
			        $(this).val(caps);
		    	}else{
		    		caps = $(this).val().toLowerCase();
			        $(this).val(caps);
		    	}
	    	}
    	});
    };
 
}(jQuery));