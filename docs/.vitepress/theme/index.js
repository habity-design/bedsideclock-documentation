import DefaultTheme from 'vitepress/theme'
import './style.css'
import ClockControls from './components/ClockControls.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ClockControls', ClockControls)
  }
}