// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const facilitiesCollection = defineCollection({
	type: 'content', // v2.5.0 and later
	schema: ({ image }) =>
		z.object({
			image: z.object({
				url: image()
			}),
			title: z.string(),
			sns: z.array(z.enum(['Twitter', 'Instagram'])),
			instagramUrl: z.string(),
			instagramName: z.string(),
			twitterUrl: z.string().optional(),
			twitterName: z.string().optional(),
			dayOff: z.array(z.enum(['日', '月', '火', '水', '木', '金', '土']) || []),
			floor: z.enum(['1F', '2F', 'Outdoor']),
			businessInfo: z.string().optional()
		})
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	facilities: facilitiesCollection
};
