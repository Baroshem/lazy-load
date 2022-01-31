import { defineNuxtConfig } from 'nuxt3'
import lazyLoad from '..'

export default defineNuxtConfig({
  buildModules: [
    lazyLoad
  ],
  lazyLoad: {
    selector: 'lazy'
  }
})
