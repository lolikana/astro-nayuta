export type TSnsData = { text: string; link: string; image: string; imageAlt: string };

export type TFloorMapData = {
	floor: '1F' | '2F';
	details: {
		number: number;
		link: '#__blank';
		icon: 'basket' | 'book' | 'knife' | 'room' | 'sauna';
		text: {
			ja: string;
			en: string;
		};
	}[];
	additional?: string;
};

export type TAccessData = {
	icon: 'car' | 'walk_man';
	text: string;
};

export type TBusinessWeekData = {
	day: '月' | '火' | '水' | '木' | '金' | '土' | '日';
	text: string[];
};
