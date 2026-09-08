// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://maddietavares.dev',
    integrations: [sitemap()],
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Caveat",
        cssVariable: "--font-caveat"
    },
    {
        provider: fontProviders.fontsource(),
        name: "Nunito",
        cssVariable: "--font-nunito",
    }
    ]
});
