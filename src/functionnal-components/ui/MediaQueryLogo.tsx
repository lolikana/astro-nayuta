import { useBreakPoint } from '@hooks/useBreakpoint';
import type { FC } from 'react';

const logoSize = (
	title: string
): { mobileWidth: string; desktopWidth: string } | void => {
	if (title.includes('Sui')) {
		return { mobileWidth: '150', desktopWidth: '220' };
	}
	if (title.includes('ひとやすみ')) {
		return { mobileWidth: '75', desktopWidth: '100' };
	}
};

type Props = {
	imgUrl: string;
	title: string;
};

const MediaQueryLogo: FC<Props> = props => {
	const { imgUrl, title } = props;
	const { mobile } = useBreakPoint();

	const width = mobile
		? `${logoSize(title)?.mobileWidth}px`
		: `${logoSize(title)?.desktopWidth}px`;

	return (
		<div className="eatery__logo">
			<img
				src={imgUrl}
				alt={`logo of ${title}`}
				loading="lazy"
				style={{ width: width }}
			/>
		</div>
	);
};

export default MediaQueryLogo;
