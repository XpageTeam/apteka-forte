// import "./standart-page.js";

import $ from "jquery"

window.jQuery = $
window.$ = $


document.addEventListener("DOMContentLoaded", e => {

	$(".fancybox").fancybox()

	$(".bl_one_product_descr_cont, .bl_one_product_descr_cont_1").each((i, el) => {
		let $this = $(el),
			text = $this.text();

		let anotherSplitedText = text.split(new RegExp(/\n/));

		$this.text("")

		let tmpText = "",
			isUlOpened = false;

		for (let i = 0; i < anotherSplitedText.length; i++){
			let abz = anotherSplitedText[i];

			let link = abz.match(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/) ? abz.match(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/).input : false;

			if (link){
				let links = link.split(" ");

				for (let j = 0; j < links.length; j++){
					abz = abz.replace(links[j], "<a href='"+links[j]+"'>"+links[j]+"</a>")
				}

			}

			if (abz.match(new RegExp(/^-|• .*/))){
				if (!isUlOpened){
					tmpText += "<ul>";
					isUlOpened = true;
				}

				abz = abz.replace(/^-|• /, "");

				tmpText += "<li>"+abz+"</li>";
			}else{
				if (isUlOpened){
					isUlOpened = false;
					tmpText += "</ul>";
				}

				tmpText += "<p>"+abz+"</p>";
			}
		}

		$this.html(tmpText)
	})

	$('.bl_one_product_descr_head').on('click', function(){
		$(this).toggleClass('active');
		$('.bl_one_product_descr_cont').slideToggle();
	});

	$("header").on("click", ".h_city", function(){
		var $this = $(this);

		if ($this.hasClass("locked"))
			return false;

		$this.toggleClass("opened");

		$this.children(".h_city_list").slideToggle(500);

		if (!$this.hasClass("paned")){
			$this.addClass("paned");
			setTimeout(function(){
				// $this.children(".h_city_list").jScrollPane();
				// $("header").on("click", ".h_city .jspVerticalBar", function(){
				// 	$(".h_city").addClass("locked");
				// 	setTimeout(function(){
				// 		$(".h_city").removeClass("locked");
				// 	}, 10)
				// });
			}, 500)
		}
	});

	$('.burger').click(function(){
		$('body').toggleClass('js__menu--open');
	})

	var menuTop = $('.h-menu').clone(),
		footerLinks = $('.f-links').clone(),
		soc = $('.h-contacts').clone(),
		personalLinks = $('.h-personal__links').clone(),
		menuBot = $('.f-menu__list').clone();

	$('.mobile-menu').append(personalLinks);
	$('.mobile-menu').append(menuTop);
	$('.mobile-menu').append(menuBot);
	$('.mobile-menu').append(footerLinks);
	$('.mobile-menu').append(soc);


	// var sideCart = $('.side-cart').clone();
	
})