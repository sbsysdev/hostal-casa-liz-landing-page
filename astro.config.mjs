import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        ssr: {
            external: [],
        },
    },
    site: 'https://sbsysdev.github.io',
    base: '/hostal-casa-liz-landing-page',
    outDir: 'docs',
});
