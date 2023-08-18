const header = document.querySelector('.header') as HTMLElement;
const nav = document.querySelector('.header__nav') as HTMLElement;
const headerHeight = header.getBoundingClientRect();
const navHeight = nav.getBoundingClientRect();
const stickyNav = (entries: IntersectionObserverEntry[]) => {
	const [entry] = entries;
	console.log(entries);
	console.log(entry.isIntersecting);
	if (!entry.isIntersecting) nav.classList.add('sticky');
	if (entry.isIntersecting) nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	rootMargin: `-${headerHeight.height + 16 - navHeight.height}px`,
	threshold: 0
});
console.log(headerObserver);
if (header != null) headerObserver.observe(header);
