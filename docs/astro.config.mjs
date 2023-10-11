import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'CommandKit-Helper',
            favicon: 'FS.svg',
            social: {
                github: 'https://github.com/FearlessNite345/CommandKit-Helper',
                youtube: 'https://www.youtube.com/@thefearlessstudios'
            },
            sidebar: [
                {
                    label: 'Installation',
                    link: '/docs/installation',
                },
                {
                    label: 'Classes',
                    autogenerate: { directory: 'docs/classes' }
                },
                {
                    label: 'Interfaces',
                    autogenerate: { directory: 'docs/interfaces' },
                },
                {
                    label: 'Typedefs',
                    autogenerate: { directory: 'docs/typedef' },
                },
            ],
        }),
    ],
    site: 'https://fearlessnite345.github.io',
    base: '/CommandKit-Helper/'
});
