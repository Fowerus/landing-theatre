$(document).ready(function(){
	$("header button.open-menu").on('click', function(){
		$('header button.open-menu').addClass('disable-button');
		$('header nav button.close-button').removeClass('disable-button');

		$('header aside.media-info').addClass('enable-menu-field');
		$('header nav ul.navigation-list').addClass('enable-menu');
		$('header nav li.number').addClass('move-number');
	})


	$('header nav button.close-button').on('click',function(){
		$('header nav button.close-button').addClass('disable-button');
		$('header button.open-menu').removeClass('disable-button');
		$('header aside.media-info').removeClass('enable-menu-field');
		$('header nav ul.navigation-list').removeClass('enable-menu');
		$('header nav li.number').removeClass('move-number');
	})
})