import type { TFloorMapData } from './types';

export const floorData: TFloorMapData[] = [
	{
		floor: '1F',
		details: [
			{
				number: 1,
				icon: 'basket',
				link: '#__blank',
				text: {
					ja: '量り売りとオーガニック食材',
					en: 'marche acoustic'
				}
			},
			{
				number: 2,
				icon: 'basket',
				link: '#__blank',
				text: {
					ja: '手しごとの日々のアイテム',
					en: 'boutique present'
				}
			},
			{
				number: 3,
				icon: 'knife',
				link: '#__blank',
				text: {
					ja: '薪で炊いたごはんとお野菜のおばんざい',
					en: '玄米おにぎり ひとやすみ'
				}
			},
			{
				number: 4,
				icon: 'basket',
				link: '#__blank',
				text: {
					ja: '花に想いを込めて',
					en: 'flower place gift '
				}
			},
			{
				number: 5,
				icon: 'sauna',
				link: '#__blank',
				text: {
					ja: '森と湖と薪と',
					en: 'Tent Sauna THE VANISH'
				}
			},
			{
				number: 6,
				icon: 'room',
				link: '#__blank',
				text: {
					ja: 'The Room of Spirit and Time',
					en: 'Rental Space another'
				}
			}
		],
		additional:
			'※ THE VANISH, another のご利用は 1F フロントにて承ります。 空き状況はお電話にてお問い合わせください。'
	},
	{
		floor: '2F',
		details: [
			{
				number: 7,
				icon: 'knife',
				link: '#__blank',
				text: {
					ja: '瑞々しい野菜のフレンチランチ',
					en: 'Vegan Restaurant Sui'
				}
			},
			{
				number: 8,
				icon: 'knife',
				link: '#__blank',
				text: {
					ja: 'フレッシュなスムージー',
					en: 'Juice Bar Delight'
				}
			},
			{
				number: 9,
				icon: 'knife',
				link: '#__blank',
				text: {
					ja: 'こころを込めたお菓子とコーヒー',
					en: 'cafe leter'
				}
			},
			{
				number: 10,
				icon: 'book',
				link: '#__blank',
				text: {
					ja: '深く耽溺するための図書スペース',
					en: 'Book Station DIVE'
				}
			}
		]
	}
];
