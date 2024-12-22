import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Astro tuto test | Blog',
        description: "Mon voyage d'apprentissage d'Astro, c'est cool",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>fr-fr</language>`,
    });
}