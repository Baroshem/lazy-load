import { defineNuxtPlugin, NuxtApp } from '#app'
import lozad from 'lozad'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  nuxtApp.provide('lazyLoad', lozad)
})
