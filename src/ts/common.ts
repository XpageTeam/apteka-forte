import {App, Element} from "./app"

App.domReady(() => {
	;(function(){
		window.addEventListener("load", function(){
			let maxHeight = 0;

			App.each(".cat-item__img", (el: HTMLElement, i: number) => {
				if (maxHeight < parseInt(getComputedStyle(el).height))
					maxHeight = parseInt(getComputedStyle(el).height)
			})

			App.each(".cat-item__img", (el: HTMLElement, i: number) => {
				el.style.height = (maxHeight + "px")
			})
		})
	})()
})