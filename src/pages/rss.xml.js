import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    return rss({
        title: 'Astro tuto test | Blog',
        description: "Mon voyage d'apprentissage d'Astro, c'est cool",
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.id}/`,
        })),
        customData: `<language>fr-fr</language>`,
    });
}