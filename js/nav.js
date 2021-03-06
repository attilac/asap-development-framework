//JS for navbar 
if (typeof jQuery === 'undefined') {
  throw new Error('This js-file requires jQuery');
}

(function ($){
	'use strict';
    var $window = $(window);

	//glob vars
	window.addEventListener('scroll', navbarBg);
	var navBar = document.getElementById('siteNav');

	//navbar background change
	function navbarBg() {
		if( ! $('#mainNavigation').hasClass('show')) {
		    var viewPort = document.getElementsByTagName('header')[0];
		    if (document.body.scrollTop > (60) || window.pageYOffset > (60) || document.documentElement.scrollTop > (60) ) {
		    	navBar.classList.remove('bg-transparent');
		        navBar.classList.add('bg-primary') ;
		    } else {
		        navBar.classList.remove('bg-primary');
		        navBar.classList.add('bg-transparent') ;
		    }
		}
	}

	$('#mainNavigation').on('show.bs.collapse', function () {
		navBar.classList.remove('bg-transparent');
  		navBar.classList.add('bg-primary');		
  		$('#open').hide();
  		$('#close').show();
	});

	$('#mainNavigation').on('hidden.bs.collapse', function () {
		if ( document.body.scrollTop > 60 || window.pageYOffset > 60 || document.documentElement.scrollTop > 60) {
			console.log(document.body.scrollTop);
			console.log(window.pageYOffset);
			console.log(document.documentElement.scrollTop);
		} else {
    		navBar.classList.remove('bg-primary');
    		navBar.classList.add('bg-transparent') ;	
        }
    	$('#close').hide();
		$('#open').show();
	});


}(jQuery));