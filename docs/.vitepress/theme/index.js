import DefaultTheme from 'vitepress/theme'
import './style.css'
import ClockControls from './components/ClockControls.vue'
import AlarmSteps from './components/AlarmSteps.vue'
import ChangelogEntry from './components/ChangelogEntry.vue'
import IssueItem from './components/IssueItem.vue'
import HueSteps from './components/HueSteps.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ClockControls', ClockControls)
    app.component('AlarmSteps', AlarmSteps)
    app.component('ChangelogEntry', ChangelogEntry)
    app.component('IssueItem', IssueItem)
    app.component('HueSteps', HueSteps)
  }
}