export type TEatery = {
	image: {
		url: string;
		height: number;
		width: number;
	};
	title: string;
	floor: ['1F' | '2F'];
	sns: ['Twitter' | 'Instagram'];
	instagramUrl: string;
	instagramName: string;
	twitterUrl?: string;
	twitterName: string;
	dayOff: ['日' | '月' | '火' | '水' | '木' | '金' | '土'] | [];
	businessInfo?: string;
	dietaries: ['Vegan' | 'Muslim Friendly' | 'Lacto-ovo Vegetarian'];
	vegewelUrl?: string;
	addInfo?: string;
	tableCheckUrl: string;
};
