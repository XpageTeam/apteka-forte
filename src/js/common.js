import $ from "jquery"

window.jQuery = $
window.$ = $

document.addEventListener("DOMContentLoaded", e => {
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
})