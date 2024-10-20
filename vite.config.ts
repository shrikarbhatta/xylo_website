import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/xylo_website/',
	plugins: [sveltekit()]
});
