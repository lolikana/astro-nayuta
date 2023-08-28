import type { TCafeMenu, TRestaurantMenu } from './types';

export const restaurantMenuData: TRestaurantMenu[] = [
	{
		shop: 'Vegan Restaurant Sui',
		menus: [
			{
				menu: '今週のワンプレートランチ',
				price: 1980,
				dishes: ['スープ', '自家製パン', 'ワンプレートディッシュ']
			},
			{
				menu: 'ランチドリンクメニュー',
				price: 330,
				addInfo: [
					'ワンプレートランチへ Juice Bar Delight の一部メニューを追加いただけます。'
				]
			}
		]
	}
];

export const cafeMenuData: TCafeMenu[] = [
	{
		shop: '玄米おにぎり  ひとやすみ',
		categories: [
			{
				category: null,
				menus: [
					{
						menu: 'なゆた(大葉&みょうが&生姜)',
						price: 308
					},
					{
						menu: '塩',
						price: 220
					},
					{
						menu: '白菜漬',
						price: 275
					},
					{
						menu: 'しそ昆布',
						price: 275
					},
					{
						menu: 'きのこ',
						price: 308
					},
					{
						menu: '梅干し',
						price: 275
					},
					{
						menu: 'ごま塩',
						price: 242
					},
					{
						menu: '納豆',
						price: 275,
						options: [
							{
								type: 'add',
								name: '海苔をとろろに変更',
								price: 22
							},
							{
								type: 'remove',
								name: '海苔なし',
								price: 30
							}
						]
					},
					{
						menu: '発酵玄米',
						price: 330,
						addInfo: ['発酵玄米おにぎりには海苔がついていません。'],
						options: [
							{
								type: 'add',
								name: '海苔を追加',
								price: 30
							}
						]
					}
				]
			}
		],
		addInfo: [
			'※ 上記価格は全て税込(10%)です。',
			'11:00 〜 15:00 のランチタイムには\n¥385(税込)にて汁物と小鉢のセットをご用意しております。\nセット内容は店頭にてご確認ください。',
			'お持ち帰りをご希望のお客様は、持ち帰り用の容器をご持参ください。',
			'お持ち帰り用に 竹皮(¥55)、紙袋(¥110) を販売しております。'
		]
	},
	{
		shop: 'cafe letter',
		categories: [
			{
				category: 'coffee',
				menus: [
					{
						menu: 'ホットコーヒー',
						price: 550,
						options: [
							{
								name: 'グアテマラ'
							},
							{
								name: 'コロンビア'
							}
						]
					},
					{
						menu: 'アイスコーヒー',
						price: 550
					}
				]
			},
			{
				category: 'tea',
				menus: [
					{
						menu: 'アイスコーヒー',
						price: 550
					},
					{
						menu: 'ダージリン',
						price: 550
					},
					{
						menu: 'ダージリン',
						price: 550
					},
					{
						menu: 'ジャスミン',
						price: 550
					},
					{
						menu: 'カモミール',
						price: 550
					}
				]
			},
			{
				category: 'デザート',
				menus: [
					{
						menu: 'ガトーショコラ',
						price: 440
					},
					{
						menu: 'ブラウニー',
						price: 440
					},
					{
						menu: 'フィナンシェ',
						price: 220
					},
					{
						menu: 'パウンドケーキ',
						price: 385
					}
				]
			}
		],
		addInfo: ['※ 上記価格は全て税込(10%)です。']
	},
	{
		shop: 'Juice Bar Delight',
		categories: [
			{
				category: 'スムージー',
				menus: [
					{
						menu: 'キウイ',
						price: 660
					},
					{
						menu: 'りんご',
						price: 660
					},
					{
						menu: 'アップルジンジャー',
						price: 660
					},
					{
						menu: 'グリーンスムージー',
						price: 660
					},
					{
						menu: '青しそスムージー',
						price: 660
					},
					{
						menu: 'アップルキャロット',
						price: 660
					},
					{
						menu: 'バナナ',
						price: 660
					},
					{
						menu: 'ミックスベリーヨーグルト',
						price: 660
					},
					{
						menu: 'さつまいも',
						price: 660
					}
				]
			},
			{
				category: '酵素ドリンク',
				menus: [
					{
						menu: '柑橘系酵素ドリンク',
						price: 550
					},
					{
						menu: 'りんご酵素ドリンク',
						price: 550
					}
				]
			},
			{
				category: 'コンブチャ',
				menus: [
					{
						menu: 'アッサム',
						price: 550
					},
					{
						menu: 'ジャスミン',
						price: 550
					},
					{
						menu: 'ルイボス',
						price: 550
					},
					{
						menu: '緑茶',
						price: 550
					},
					{
						menu: 'ラベンダー',
						price: 550
					},
					{
						menu: 'カモミール',
						price: 550
					},
					{
						menu: 'レモングラス',
						price: 550
					}
				]
			},
			{
				category: 'スパークリングドリンク',
				menus: [
					{
						menu: '自家製ジンジャーエール',
						price: 550
					},
					{
						menu: '自家製コーラ',
						price: 550
					}
				]
			},
			{
				category: 'ホットドリンク',
				menus: [
					{
						menu: 'ゆずティー',
						price: 550
					},
					{
						menu: 'ホットジンジャー',
						price: 550
					}
				]
			},
			{
				category: null,
				menus: [
					{
						menu: 'テイクアウト用 オリジナルボトル',
						price: 330
					}
				]
			}
		],
		addInfo: [
			'※ 上記価格は全て税込(10%)です。',
			'※ ホットドリンクのテイクアウトは紙コップ(¥0)にて提供いたします。'
		]
	}
];
