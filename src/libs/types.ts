type TEateryFacilityCommon = {
	image: {
		url: string;
	};
	title: string;
	floor: ['1F' | '2F', 'Outdoor'];
	sns: ['Twitter' | 'Instagram'];
	instagramUrl: string;
	instagramName: string;
	twitterUrl?: string;
	twitterName: string;
	dayOff: ['日' | '月' | '火' | '水' | '木' | '金' | '土'] | [];
	businessInfo?: string;
};

export type TEatery = TEateryFacilityCommon & {
	image: {
		height: number;
		width: number;
	};
	dietaries: ['Vegan' | 'Muslim Friendly' | 'Lacto-ovo Vegetarian'];
	vegewelUrl?: string;
	addInfo?: string;
	tableCheckUrl: string;
};

export type TRestaurantMenu = {
	shop: 'Vegan Restaurant Sui';
	menus: {
		menu: string;
		price: number;
		dishes?: string[];
		addInfo?: string[];
	}[];
};

export type TCafeMenu = {
	shop: '玄米おにぎり ひとやすみ' | 'cafe letter' | 'Juice bar Delight';
	categories: {
		category: string | null;
		menus: {
			dish: string;
			price: number;
			addInfo?: string[];
			options?: {
				type?: 'add' | 'remove';
				name: string;
				price?: number;
			}[];
		}[];
	}[];
	addInfo?: string[];
};

export type TFacility = TEateryFacilityCommon;

export type TFacilityInfo = {
	title: string;
	informations: {
		subTitle: string;
		texts: string[];
		button?: { text: string; link: string; pdf?: boolean };
		rules?: {
			limit: string;
			price: string;
		}[];
	}[];
};

export type TFacilityType = {
	type: 'Tent Sauna THE VANISH' | 'Rental Space another';
	info: TFacilityInfo[];
};
