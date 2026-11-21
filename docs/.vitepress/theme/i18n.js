// Shared language helper for the custom components.
// The active language comes from the VitePress locale (see config.js → locales).
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

export function useLocale() {
  const { lang } = useData()
  const code = computed(() => ((lang.value || 'en').toLowerCase().startsWith('de') ? 'de' : 'en'))
  // Prefix an internal docs link with the locale folder, e.g. /Connectivity/Philips_Hue → /de/Connectivity/Philips_Hue
  const link = (path) => withBase(code.value === 'de' ? '/de' + path : path)
  return { code, link }
}
