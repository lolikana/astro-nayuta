import { client } from '@libs/microcms';
import type { TEatery } from '@libs/types';
import type { MicroCMSQueries } from 'microcms-js-sdk';

export type TEateryMicroCms = TEatery & {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
};

export type TEateryReponse = {
	totalCount: number;
	offset: number;
	limit: number;
	contents: TEateryMicroCms[];
};

export const getEatery = async (queries?: MicroCMSQueries) => {
	return await client.get<TEateryReponse>({ endpoint: 'eatery', queries });
};
export const getEateryDetail = async (contentId: string, queries?: MicroCMSQueries) => {
	return await client.getListDetail<TEateryMicroCms>({
		endpoint: 'eatery',
		contentId,
		queries
	});
};
