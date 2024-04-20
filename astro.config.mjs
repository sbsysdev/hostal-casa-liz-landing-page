import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        base: '/hostal-casa-liz-landing-page',
        ssr: {
            external: [],
        },
        build: {
            outDir: 'docs',
        },
    },
});
