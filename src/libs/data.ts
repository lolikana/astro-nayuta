import type { TCafeMenu, TFacilityType, TRestaurantMenu } from './types';

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

export const facilitiesData: TFacilityType[] = [
	{
		type: 'Rental Space another',
		info: [
			{
				title: 'ご予約に関して',
				informations: [
					{
						subTitle: '予約方法',
						texts: [
							'お電話、もしくは下記リンク先のページより、SPACE MARKETの予約フォームをご利用ください。'
						],
						button: {
							text: 'another 予約リンク一覧',
							link: '/another'
						}
					}
				]
			},
			{
				title: 'ご利用に関して',
				informations: [
					{
						subTitle: '予約方法',
						texts: ['お電話か、SPACE MARKETより承ります。', 'Tel 092 - 410 - 3309']
					},
					{
						subTitle: '営業時間',
						texts: ['10:00 〜 17:00', '(最終利用開始時間 16:00)']
					},

					{
						subTitle: '利用料金',
						texts: [
							'部屋タイプごとに料金設定しております。',
							'(収容人数 : 12名〜、料金 : 1,100円/1h〜)',
							'詳細は下記リンクよりPDFをご覧ください。'
						],
						button: {
							text: 'another 利用料金表',
							link: '/pdf/another.pdf',
							pdf: true
						}
					},

					{
						subTitle: '常備品',
						texts: [
							'テーブル、椅子、ハンガーラック',
							'電源タップ、Wi-Fi',
							'その他備品レンタルに関しては別途料金にて承ります。ご予約時にご確認ください。',
							'※ 当施設に準備のない設備・物品はお客様にてご用意ください。'
						]
					},

					{
						subTitle: '持ち込みについて',
						texts: [
							'飲料(酒類を除く)のみとさせていただきます。',
							'(施設内販売品のテイクアウトでの持ち込み可)'
						]
					},

					{
						subTitle: '禁止事項',
						texts: ['飲酒、喫煙、各部屋の「用途」以外の利用']
					},

					{
						subTitle: 'キャンセルポリシー',
						texts: [
							'ご予約のキャンセルに関する規定は以下の通りです。',
							'ご利用14日前より下記キャンセル料が発生いたします。'
						],
						rules: [
							{
								limit: '・ご利用日の14日前〜8日前',
								price: '利用料金の50%'
							},

							{
								limit: '・ご利用日の7日前〜4日前',
								price: '利用料金の80%'
							},

							{
								limit: '・ご利用日の3日前〜利用日当日',
								price: '利用料金の100%'
							}
						]
					}
				]
			}
		]
	},
	{
		type: 'Tent Sauna THE VANISH',
		info: [
			{
				title: 'ご予約に関して',
				informations: [
					{
						subTitle: '予約方法',
						texts: [
							'お電話、もしくは下記リンク先のページより、SPACE MARKETの予約フォームをご利用ください。'
						],
						button: {
							text: 'THE VANISH 予約リンク一覧',
							link: '/the-vanish'
						}
					}
				]
			},
			{
				title: 'ご利用に関して',
				informations: [
					{
						subTitle: '予約方法',
						texts: ['お電話か、SPACE MARKETより承ります。', 'Tel 092 - 410 - 3309']
					},

					{
						subTitle: '営業時間',
						texts: ['10:00　〜　17:00', '(最終利用開始時間 16:00)']
					},

					{
						subTitle: '利用料金',
						texts: ['テント 1張', '　1時間　3,300円 (6名様まで一律料金)']
					},

					{
						subTitle: 'サービス内容',
						texts: [
							'テントサウナの器材貸し出しと場所の提供。',
							'※スタッフがテント設営、火おこし、片付けなどのお手伝いをさせていただきます。',
							'※悪天候により急遽中止する場合がございます。'
						]
					},

					{
						subTitle: '常備品',
						texts: [
							'サウナ用テント、サウナ用薪ストーブ、薪、バーナー、耐熱グローブ、火バサミ、火消し壺、ロウリュウセット一式、サウナストーン、温度計、砂時計、着替え用テント、シャワー室、木製チェア類、貴重品入れ、ウォーターサーバー&コップ'
						]
					},

					{
						subTitle: '貸し出し品',
						texts: [
							'ドライヤー、サンダル',
							'※サウナ用の着衣(水着等)、タオル、アメニティグッズ類はお客様にてご用意ください。'
						]
					},
					{
						subTitle: '持ち込みについて',
						texts: [
							'飲料(酒類を除く)のみとさせていただきます。',
							'(施設内販売品のテイクアウトでの持ち込み可)'
						]
					},

					{
						subTitle: '禁止事項',
						texts: ['飲酒、喫煙']
					},

					{
						subTitle: 'キャンセルポリシー',
						texts: [
							'ご予約のキャンセルに関する規定は以下の通りです。',
							'ご利用日当日より下記キャンセル料が発生いたします。'
						],
						rules: [
							{
								limit: '・ご利用日当日',
								price: '利用料金の100%'
							}
						]
					}
				]
			}
		]
	}
];
