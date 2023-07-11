import {Fancybox} from "@fancyapps/ui";

export let slideUp = (target, duration = 500, callback) => {
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = `${duration}ms`
	target.style.boxSizing = 'border-box'
	target.style.height = `${target.offsetHeight}px`
	// eslint-disable-next-line no-unused-expressions
	target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	window.setTimeout(() => {
		target.style.display = 'none'
		target.style.removeProperty('height')
		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-top')
		target.style.removeProperty('margin-bottom')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		if (callback) {
			callback()
		}
	}, duration)
}

export let slideDown = (target, duration = 500, callback) => {
	target.style.removeProperty('display')
	let display = window.getComputedStyle(target).display

	if (display === 'none') {
		display = 'block'
	}
	target.style.display = display
	let height = target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	// eslint-disable-next-line no-unused-expressions
	target.offsetHeight
	target.style.boxSizing = 'border-box'
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = `${duration}ms`
	target.style.height = `${height}px`
	target.style.removeProperty('padding-top')
	target.style.removeProperty('padding-bottom')
	target.style.removeProperty('margin-top')
	target.style.removeProperty('margin-bottom')
	window.setTimeout(() => {
		target.style.removeProperty('height')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		if (callback) {
			callback()
		}
	}, duration)
}

export let slideToggle = (target, duration = 500, callback) => {
	let display = window.getComputedStyle(target).display
	if (display === 'none') {
		slideDown(target, duration, callback)
	} else {
		slideUp(target, duration, callback)
	}
}

const lang = () => {
	const $lang = document.querySelector('.languages');
	const $btn = $lang.querySelector('.head');
	const $dropdown = $lang.querySelector('.dropdown');
	$btn.addEventListener('click', () => {
		$lang.classList.toggle('is-open');
		slideToggle($dropdown)
	})
}
lang();
const anchors = document.querySelectorAll('.js-anchore')
anchors.forEach($button => {
	$button.addEventListener('click', (e) => {
		e.preventDefault()
		const $el = document.getElementById($button.getAttribute('href').substring(1))
		if ($el) {
			let display = window.getComputedStyle($el).display
			if (display === 'none') {
				$el.style.display = 'block'
			}
			const elPosition = $el.getBoundingClientRect().top
			if (display === 'none') {
				$el.style.display = 'none'
			}
			window.scrollBy({
				top: elPosition,
				behavior: 'smooth'
			})
		}
	})
})
Fancybox.bind('[data-fancybox]')
