import { computed } from 'vue'
import { LazyLoadOptions, Observer, UseLazyLoad } from '../types'
import { useNuxtApp, useRuntimeConfig, useState } from '#app'

export const useLazyLoad = (): UseLazyLoad => {
  const { $lazyLoad } = useNuxtApp()
  const { lazyLoad: lazyLoadOptions } = useRuntimeConfig()
  const { selector, options }: LazyLoadOptions = lazyLoadOptions

  const observer = useState<Observer>('lazy-load-observer', () => null as any)

  const init = (): Observer => {
    const lazyLoadObserver = $lazyLoad(`.${selector || 'lazy'}`, options)
    lazyLoadObserver.observe()

    observer.value = lazyLoadObserver
    return lazyLoadObserver
  }

  return {
    observer: computed(() => observer.value),
    init
  }
}
