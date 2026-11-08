<!--
  ClockControls.vue — controls guide for the Habity bedside clock.
  Pick a button, see every action it can do.
  Drop into .vitepress/theme/components/ and register in .vitepress/theme/index.ts.
  Colors come from VitePress theme variables, so it follows light/dark mode automatically.
  All behavior text mirrors support.habity.design/Getting_started/Controls.html.
-->
<template>
  <div class="hc">
    <div class="hc-tabs" role="tablist" aria-label="Choose a button" @keydown="onKey">
      <button
        v-for="b in buttons"
        :key="b.id"
        :id="'hc-tab-' + b.id"
        ref="tabs"
        type="button"
        role="tab"
        class="hc-tab"
        :class="{ on: selected === b.id }"
        :aria-selected="selected === b.id ? 'true' : 'false'"
        :aria-controls="'hc-panel-' + b.id"
        :tabindex="selected === b.id ? 0 : -1"
        @click="selected = b.id"
      >
        <span class="hc-tab-icon" v-html="b.icon" aria-hidden="true"></span>
        <span>{{ b.short }}</span>
      </button>
    </div>

    <div
      v-for="b in buttons"
      v-show="selected === b.id"
      :key="b.id"
      :id="'hc-panel-' + b.id"
      class="hc-panel"
      :class="{ 'hc-white': b.whiteIcons }"
      role="tabpanel"
      :aria-labelledby="'hc-tab-' + b.id"
    >
      <p class="hc-where">{{ b.where }}</p>
      <section v-for="grp in groups(b)" :key="grp.title" class="hc-group">
        <h4 v-if="groups(b).length > 1" class="hc-group-title">{{ grp.title }}</h4>
        <ul class="hc-list">
          <li v-for="a in grp.actions" :key="a.label" class="hc-card">
            <span class="hc-g" v-html="icons[a.g]" aria-hidden="true"></span>
            <span class="hc-gname">{{ gestures[a.g] }}</span>
            <span v-if="a.when" class="hc-when">{{ a.when }}</span>
            <strong class="hc-title">{{ a.label }}</strong>
            <span class="hc-detail">{{ a.detail }}</span>
          </li>
        </ul>
      </section>
    </div>

    <p class="hc-foot">Any press lights up the display for 10 seconds.</p>
  </div>
</template>

<script>
const GESTURES = {
  press: 'Press',
  double: 'Double press',
  hold: 'Press and hold',
  hold5: 'Hold 5 seconds',
  turn: 'Turn'
}

const ICONS = {
  press: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="currentColor"/></svg>',
  double: '<svg viewBox="0 0 24 24"><circle cx="7.5" cy="12" r="3.5" fill="currentColor"/><circle cx="16.5" cy="12" r="3.5" fill="currentColor"/></svg>',
  hold: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5" fill="currentColor"/><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
  hold5: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5" fill="currentColor"/><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
  turn: '<svg viewBox="0 0 24 24"><path d="M5 12a7 7 0 1 0 2.1-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M6.5 3v4.5H11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
}

const BUTTONS = [
  {
    id: 'stop',
    short: 'Stop',
    icon: '<svg viewBox="0 0 40 24"><circle cx="20" cy="12" r="8.5" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.6"/></svg>',
    where: 'The small round button on top.',
    actions: [
      { g: 'press', ring: true, label: 'Stop the alarm', detail: 'Press once to stop the alarm from playing.' },
      { g: 'press', when: 'Anytime', label: 'Nightlight on/off', detail: 'When no alarm is playing, Stop toggles the built-in nightlight.' },
      { g: 'double', when: 'Alarm set', label: 'Turn next alarm off/on', detail: 'If your next alarm shows under the time, double-press to disable it. Double-press again to enable it.' },
      { g: 'double', ring: true, when: 'Snoozed', label: 'Cancel snooze', detail: 'Ends the snooze timer and disables the alarm. Double-press again to enable it.' }
    ]
  },
  {
    id: 'snooze',
    short: 'Snooze',
    whiteIcons: true,
    icon: '<svg viewBox="0 0 40 24"><rect x="3" y="7.5" width="34" height="9" rx="4.5" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.6"/></svg>',
    where: 'The long bar on top.',
    actions: [
      { g: 'press', ring: true, label: 'Snooze 5 minutes', detail: 'You can snooze as many times as you need. To cancel the snooze, double-press Stop.' },
      { g: 'double', when: 'Anytime', label: 'Play sleep sounds', detail: 'Starts your last used sleep sound. A zZ icon shows in the upper right corner. Turn the selector to adjust the volume.' },
      { g: 'press', when: 'Sounds playing', label: 'Pause sounds', detail: 'Pauses sleep sounds or wind down sounds.' }
    ]
  },
  {
    id: 'selector',
    short: 'Selector',
    whiteIcons: true,
    icon: '<svg viewBox="0 0 40 24"><rect x="13" y="1.5" width="10" height="21" rx="5" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.6"/><path d="M29.5 4Q37 12 29.5 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M26.3 4L30.3 1.5V6.5ZM26.3 20L30.3 17.5V22.5Z" fill="currentColor"/></svg>',
    where: 'The wheel on the right side. Turn it or press it in.',
    actions: [
      { g: 'press', when: 'Anytime', label: 'Open settings', detail: 'Press once to enter the settings menu. In a menu, press to select the highlighted item.' },
      { g: 'turn', when: 'In settings', label: 'Move through the menu', detail: 'Turn to move between items.' },
      { g: 'hold', when: 'In a menu', label: 'Return to home', detail: 'Press and hold to jump straight back to the clock from any submenu.' }
    ]
  }
]

export default {
  name: 'ClockControls',
  data() {
    return { buttons: BUTTONS, gestures: GESTURES, icons: ICONS, selected: 'stop' }
  },
  methods: {
    groups(b) {
      return [
        { title: 'While the alarm is ringing', actions: b.actions.filter(a => a.ring) },
        { title: 'Other times', actions: b.actions.filter(a => !a.ring) }
      ].filter(g => g.actions.length)
    },
    onKey(e) {
      const keys = { ArrowRight: 1, ArrowLeft: -1 }
      if (!(e.key in keys)) return
      e.preventDefault()
      const ids = this.buttons.map(b => b.id)
      const i = (ids.indexOf(this.selected) + keys[e.key] + ids.length) % ids.length
      this.selected = ids[i]
      this.$nextTick(() => { const t = this.$refs.tabs && this.$refs.tabs[i]; if (t) t.focus() })
    }
  }
}
</script>

<style>
.hc {
  /* Habity brand: yellow accent with dark text on it, as on the site's brand buttons */
  --hc-ink: var(--vp-c-text-1, #252421);
  --hc-ink-2: var(--vp-c-text-2, #5a5649);
  --hc-bg: var(--vp-c-bg, #f7f4e6);
  --hc-soft: var(--vp-c-bg-soft, #eeebd8);
  --hc-divider: var(--vp-c-divider, #d8d4be);
  --hc-accent: var(--vp-c-brand-1, #f3bb14);
  --hc-on-accent: var(--vp-button-brand-text, #252421);
  color: var(--hc-ink);
  margin: 24px 0;
  display: grid;
  gap: 14px;
}
.hc * { box-sizing: border-box; }

.hc-tabs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 3px;
  padding: 3px;
  background: var(--hc-soft);
  border: 1px solid var(--hc-divider);
  border-radius: 12px;
}
.hc .hc-tab {
  font: inherit;
  font-size: 14px;
  color: var(--hc-ink-2);
  border: 0;
  background: transparent;
  border-radius: 9px;
  padding: 8px 6px;
  cursor: pointer;
  white-space: nowrap;
  display: grid;
  justify-items: center;
  gap: 2px;
  transition: background .15s, color .15s;
}
.hc-tab-icon { display: block; width: 40px; height: 24px; }
.hc-tab-icon svg { display: block; width: 100%; height: 100%; }
.hc .hc-tab:hover { color: var(--hc-ink); }
.hc .hc-tab.on { background: var(--hc-accent); color: var(--hc-on-accent); font-weight: 600; }
.hc .hc-tab:focus-visible { outline: 2px solid var(--hc-accent); outline-offset: 2px; }

.hc-panel { display: grid; gap: 18px; }
.hc-group { display: grid; gap: 10px; }
.hc .hc-group-title {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: inherit !important;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--hc-ink-2);
}
.hc .hc-where { margin: 0; color: var(--hc-ink-2); font-size: 14px; line-height: 1.5; }
.hc .hc-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
.hc .hc-list li { margin: 0; }

.hc-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  grid-template-areas:
    "icon gname when"
    "icon title title"
    "icon detail detail";
  column-gap: 14px;
  row-gap: 2px;
  align-items: start;
  background: var(--hc-bg);
  border: 1px solid var(--hc-divider);
  border-radius: 14px;
  padding: 14px 16px;
}
.hc-g {
  grid-area: icon;
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--hc-accent);
  color: var(--hc-on-accent);
}
.hc-g svg { width: 18px; height: 18px; }
.hc-white .hc-g { background: #ffffff; color: #252421; box-shadow: inset 0 0 0 1px var(--hc-divider); }
.hc-gname {
  grid-area: gname;
  align-self: center;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--hc-ink-2);
}
.hc-when {
  grid-area: when;
  justify-self: end;
  font-size: 12px;
  font-weight: 500;
  color: var(--hc-ink-2);
  background: var(--hc-soft);
  border-radius: 999px;
  padding: 2px 9px;
  white-space: nowrap;
}
.hc-title { grid-area: title; font-size: 16px; font-weight: 600; line-height: 1.4; }
.hc-detail { grid-area: detail; font-size: 14px; line-height: 1.5; color: var(--hc-ink-2); }

.hc .hc-foot { margin: 0; font-size: 13px; color: var(--hc-ink-2); }
</style>
