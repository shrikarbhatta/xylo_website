import adapter from '@sveltejs/adapter-static'
import { preprocess } from '@sveltejs/kit'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/xylo_website' : ''
    }
  }
}

export default config
