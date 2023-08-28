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
		shop: '玄米おにぎり ひとやすみ',
		categories: [
			{
				category: null,
				menus: [
					{
						dish: 'なゆた(大葉&みょうが&生姜)',
						price: 308
					},
					{
						dish: '塩',
						price: 220
					},
					{
						dish: '白菜漬',
						price: 275
					},
					{
						dish: 'しそ昆布',
						price: 275
					},
					{
						dish: 'きのこ',
						price: 308
					},
					{
						dish: '梅干し',
						price: 275
					},
					{
						dish: 'ごま塩',
						price: 242
					},
					{
						dish: '納豆',
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
						dish: '発酵玄米',
						price: 330,
						addInfo: ['※ 発酵玄米おにぎりには海苔がついていません。'],
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
						dish: 'ホットコーヒー',
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
						dish: 'アイスコーヒー',
						price: 550
					}
				]
			},
			{
				category: 'tea',
				menus: [
					{
						dish: 'アイスコーヒー',
						price: 550
					},
					{
						dish: 'ダージリン',
						price: 550
					},
					{
						dish: 'ダージリン',
						price: 550
					},
					{
						dish: 'ジャスミン',
						price: 550
					},
					{
						dish: 'カモミール',
						price: 550
					}
				]
			},
			{
				category: 'デザート',
				menus: [
					{
						dish: 'ガトーショコラ',
						price: 440
					},
					{
						dish: 'ブラウニー',
						price: 440
					},
					{
						dish: 'フィナンシェ',
						price: 220
					},
					{
						dish: 'パウンドケーキ',
						price: 385
					}
				]
			}
		],
		addInfo: ['※ 上記価格は全て税込(10%)です。']
	},
	{
		shop: 'Juice bar Delight',
		categories: [
			{
				category: 'スムージー',
				menus: [
					{
						dish: 'キウイ',
						price: 660
					},
					{
						dish: 'りんご',
						price: 660
					},
					{
						dish: 'アップルジンジャー',
						price: 660
					},
					{
						dish: 'グリーンスムージー',
						price: 660
					},
					{
						dish: '青しそスムージー',
						price: 660
					},
					{
						dish: 'アップルキャロット',
						price: 660
					},
					{
						dish: 'バナナ',
						price: 660
					},
					{
						dish: 'ミックスベリーヨーグルト',
						price: 660
					},
					{
						dish: 'さつまいも',
						price: 660
					}
				]
			},
			{
				category: '酵素ドリンク',
				menus: [
					{
						dish: '柑橘系酵素ドリンク',
						price: 550
					},
					{
						dish: 'りんご酵素ドリンク',
						price: 550
					}
				]
			},
			{
				category: 'コンブチャ',
				menus: [
					{
						dish: 'アッサム',
						price: 550
					},
					{
						dish: 'ジャスミン',
						price: 550
					},
					{
						dish: 'ルイボス',
						price: 550
					},
					{
						dish: '緑茶',
						price: 550
					},
					{
						dish: 'ラベンダー',
						price: 550
					},
					{
						dish: 'カモミール',
						price: 550
					},
					{
						dish: 'レモングラス',
						price: 550
					}
				]
			},
			{
				category: 'スパークリングドリンク',
				menus: [
					{
						dish: '自家製ジンジャーエール',
						price: 550
					},
					{
						dish: '自家製コーラ',
						price: 550
					}
				]
			},
			{
				category: 'ホットドリンク',
				menus: [
					{
						dish: 'ゆずティー',
						price: 550
					},
					{
						dish: 'ホットジンジャー',
						price: 550
					}
				]
			},
			{
				category: null,
				menus: [
					{
						dish: 'テイクアウト用 オリジナルボトル',
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
