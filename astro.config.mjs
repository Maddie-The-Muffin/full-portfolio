// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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
