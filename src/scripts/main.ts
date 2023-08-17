const header = document.querySelector('.header') as HTMLElement;
const nav = document.querySelector('.header__nav') as HTMLElement;
const navHeight = nav.getBoundingClientRect();
const stickyNav = (entries: IntersectionObserverEntry[]) => {
	const [entry] = entries;
	if (!entry.isIntersecting) nav.classList.add('sticky');
	if (entry.isIntersecting) nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	rootMargin: `-${navHeight.height}px`,
	threshold: 0
});
if (header != null) headerObserver.observe(header);
