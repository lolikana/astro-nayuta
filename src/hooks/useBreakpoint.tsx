import useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = { mobile: 0, desktop: 768 };

export const useBreakPoint = () => {
	const { breakpoint } = useBreakpoint(BREAKPOINTS, 'mobile');
	const mobile = breakpoint === 'mobile';
	const desktop = breakpoint === 'desktop';
	return { mobile, desktop };
};
