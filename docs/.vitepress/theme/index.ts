// https://vitepress.dev/guide/custom-theme
import { NConfigProvider } from 'naive-ui'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'
import type { Theme } from 'vitepress'

const NaiveUIProvider = () => h(NConfigProvider, null, {
  default: () => h(DefaultTheme.Layout)
})

export default {
  extends: DefaultTheme,
  Layout: NaiveUIProvider,
  enhanceApp: ({ app }) => {

  }
} satisfies Theme
