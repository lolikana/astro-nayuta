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
};
