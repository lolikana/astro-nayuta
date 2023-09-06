import { useBreakPoint } from '@hooks/useBreakpoint';
import type { FC } from 'react';

const logoSize = (
	title: string
): { mobileWidth: string; desktopWidth: string } | void => {
	if (
		title.includes('Sui') ||
		title.includes('flower place gift') ||
		title.includes('Book Station DIVE')
	) {
		return { mobileWidth: '150', desktopWidth: '220' };
	}
	if (title.includes('ひとやすみ')) {
		return { mobileWidth: '75', desktopWidth: '100' };
	}
	if (
		title.includes('cafe letter') ||
		title.includes('Juice bar Delight') ||
		title.includes('marche acoustic') ||
		title.includes('boutique present') ||
		title.includes('Rental Space another') ||
		title.includes('Tent Sauna THE VANISH')
	) {
		return { mobileWidth: '220', desktopWidth: '410' };
	}
};

type Props = {
	imgUrl:
		| string
		| {
				src: string;
				height: number;
				width: number;
				format: 'svg' | 'jpeg' | 'jpg' | 'png' | 'tiff' | 'webp' | 'gif';
		  };
	title: string;
};

const MediaQueryLogo: FC<Props> = props => {
	const { imgUrl, title } = props;
	const { mobile } = useBreakPoint();
	const width = mobile
		? `${logoSize(title)?.mobileWidth}px`
		: `${logoSize(title)?.desktopWidth}px`;

	const src = typeof imgUrl === 'string' ? imgUrl : imgUrl.src;

	return (
		<img src={src} alt={`logo of ${title}`} loading="lazy" style={{ width: width }} />
	);
};

export default MediaQueryLogo;
