const headerScroll = () => {
	const $header = document.querySelector('.s-header');
	const $body = document.querySelector('body');
	const onScroll = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const headerHeight = $header.offsetHeight;

		if (scrollTop > headerHeight) {
			$header.classList.add('is-fixed');
		} else {
			$header.classList.remove('is-fixed');
		}
	}
	window.addEventListener('scroll', () => onScroll());
	window.addEventListener('resize', () => onScroll());
};
headerScroll()
