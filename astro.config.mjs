// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "DM Mono",
        cssVariable: "--font-dm-mono"
    },
    {
        provider: fontProviders.fontsource(),
        name: "Kalam",
        cssVariable: "--font-kalam",
    }
    ]
});
