import { join } from 'path';
import type { Config } from 'tailwindcss';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{svelte,js,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				'first-color': '#3851c9',
				'first-color-alt': '#3702a3',
				'title-color': '#393939',
				'text-color': '#707070',
				'text-color-light': '#A6A6A6',
				'body-color': '#FBFEFD',
				'container-color': '#FFFFFF'
			},
			fontFamily: {
				body: ['Poppins', 'sans-serif']
			},
			fontSize: {
				h1: '1.5rem',
				h2: '1.25rem',
				h3: '1rem',
				normal: '.938rem',
				small: '.813rem',
				smaller: '.75rem'
			},
			spacing: {
				'mb-1': '.5rem',
				'mb-2': '1rem',
				'mb-3': '1.5rem',
				'mb-4': '2rem',
				'mb-5': '2.5rem',
				'mb-6': '3rem'
			}
		}
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton
	]
} satisfies Config;

export default config;
