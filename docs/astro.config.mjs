import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    site: 'https://fearlessnite345.github.io',
    base: '/commandkit-helper',
    integrations: [
        starlight({
            title: 'commandkit-helper',
            favicon: 'FS.png',
            customCss: [
                './src/styles/colors.css'
            ],
            pagination: false,
            lastUpdated: true,
            tableOfContents: false,
            logo: {
                dark: './public/FS.png',    
                light: './public/FS.png',
                src: './public/FS.png',
            },
            editLink: {
                baseUrl: 'https://github.com/FearlessNite345/commandkit-helper/tree/main/docs'
            },
            social: {
                github: 'https://github.com/FearlessNite345/commandkit-helper',
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
        tailwind()
    ],
});
