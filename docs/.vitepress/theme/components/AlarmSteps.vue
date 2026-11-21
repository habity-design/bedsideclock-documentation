<!--
  AlarmSteps.vue — "How to set up your alarm" as numbered steps for the Habity support site.
  Static, no interaction. Colors and fonts come from the VitePress theme.
  Text mirrors support.habity.design/Alarm/How_to_set_my_alarm.html.
-->
<template>
  <div class="as">
    <ol class="as-steps">
      <!-- 1. Schedule -->
      <li class="as-step">
        <span class="as-num" aria-hidden="true">1</span>
        <div class="as-body">
          <h3 class="as-title">{{ t.s1Title }}</h3>
          <p class="as-text">{{ t.s1Text }}</p>
          <p class="as-path" :aria-label="t.path3Aria"><span>Menu</span><i aria-hidden="true">›</i><span>Alarm</span><i aria-hidden="true">›</i><span>Settings</span></p>
          <ul class="as-sched">
            <li v-for="s in t.schedules" :key="s.name" class="as-card">
              <span class="as-card-head">
                <strong class="as-card-title">{{ s.name }}</strong>
                <span v-if="s.isDefault" class="as-badge">{{ t.defaultBadge }}</span>
              </span>
              <div class="as-week" :aria-label="s.aria">
                <span v-for="(d, i) in t.days" :key="i" class="as-day">
                  <span class="as-dot" :class="{ on: s.times[i] }"></span>
                  <span class="as-dname">{{ d }}</span>
                </span>
              </div>
              <span v-if="s.time" class="as-one">{{ s.time }}</span>
              <span class="as-card-text">{{ s.text }}</span>
            </li>
          </ul>
          <p class="as-note">{{ t.s1Note }}</p>
        </div>
      </li>

      <!-- 2. Wake-up light -->
      <li class="as-step">
        <span class="as-num" aria-hidden="true">2</span>
        <div class="as-body">
          <h3 class="as-title">{{ t.s2Title }}</h3>
          <p class="as-text">{{ t.s2Text }}</p>
          <p class="as-path" :aria-label="t.path4Aria"><span>Menu</span><i aria-hidden="true">›</i><span>Alarm</span><i aria-hidden="true">›</i><span>Settings</span><i aria-hidden="true">›</i><span>Wake-up light</span></p>
          <div class="as-card as-ramp-card">
            <div class="as-ramp" aria-hidden="true">
              <span class="as-ramp-bar"></span>
              <span class="as-bell">
                <svg viewBox="0 0 24 24"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z M10 20.5a2 2 0 0 0 4 0" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"/></svg>
              </span>
            </div>
            <div class="as-ramp-labels" aria-hidden="true"><span>{{ t.lightStarts }}</span><span>{{ t.alarm }}</span></div>
            <div class="as-chips" :aria-label="t.chipsAria">
              <span class="as-chip">{{ t.off }} <small>{{ t.defaultSmall }}</small></span>
              <span v-for="m in ['1 min', '5 min', '10 min', '30 min']" :key="m" class="as-chip">{{ m }}</span>
            </div>
          </div>
          <p class="as-note">{{ t.s2NoteBefore }}<a :href="link('/Connectivity/Philips_Hue')">{{ t.s2NoteLink }}</a>{{ t.s2NoteAfter }}</p>
        </div>
      </li>

      <!-- 3. Sound -->
      <li class="as-step">
        <span class="as-num" aria-hidden="true">3</span>
        <div class="as-body">
          <h3 class="as-title">{{ t.s3Title }}</h3>
          <p class="as-text">{{ t.s3Text }}</p>
        </div>
      </li>

      <!-- 4. Confirm -->
      <li class="as-step">
        <span class="as-num" aria-hidden="true">4</span>
        <div class="as-body">
          <h3 class="as-title">{{ t.s4Title }}</h3>
          <p class="as-text">{{ t.s4Text }}</p>
          <div class="as-face" role="img" :aria-label="t.faceAria">
            <span class="as-face-time">23:14</span>
            <span class="as-face-alarm">07:00
            </span>
          </div>
          <div class="as-help">
            <strong class="as-help-title">{{ t.helpTitle }}</strong>
            <ul class="as-help-list">
              <li v-for="h in t.help" :key="h.lead"><span>{{ h.lead }}</span> {{ h.text }}</li>
            </ul>
          </div>
          <p class="as-note">{{ t.s4NoteBefore }}<a :href="link('/Getting_started/Controls')">{{ t.s4NoteLink }}</a>{{ t.s4NoteAfter }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useLocale } from '../i18n.js'

const TEXT = {
  en: {
    s1Title: 'Choose a schedule',
    s1Text: 'Press the selector to open the menu, go to Alarm, then Settings, and choose how your alarm repeats. Only one schedule is active at a time.',
    path3Aria: 'Menu, then Alarm, then Settings',
    defaultBadge: 'Default',
    days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    schedules: [
      { name: 'Repeat daily', isDefault: true, time: '07:00 every day', times: [1, 1, 1, 1, 1, 1, 1], text: 'One alarm time, every day of the week.', aria: 'Alarm on all seven days' },
      { name: 'Weekdays', time: '07:00 Monday to Friday', times: [1, 1, 1, 1, 1, 0, 0], text: 'One alarm time, Monday to Friday. No alarm on the weekend.', aria: 'Alarm Monday to Friday, off Saturday and Sunday' },
      { name: 'Custom', perDay: true, times: ['06:30', '', '07:00', '', '07:30', '09:00', ''], text: 'A different time for each day. Turn individual days on or off.', aria: 'Alarm on Monday, Wednesday, Friday and Saturday; off Tuesday, Thursday and Sunday' }
    ],
    s1Note: 'Alarm times stay saved in each schedule, so you can switch back and forth without setting them again.',
    s2Title: 'Turn on the wake-up light',
    s2Text: 'You find it in the same Alarm settings, next to the schedule. The nightlight slowly brightens before your alarm goes off, so you wake up to light instead of just sound.',
    path4Aria: 'Menu, then Alarm, then Settings, then Wake-up light',
    lightStarts: 'Light starts',
    alarm: 'Alarm',
    chipsAria: 'Wake-up light options',
    off: 'Off',
    defaultSmall: 'default',
    s2NoteBefore: 'The setting applies to all your enabled alarms, whatever the schedule. You can also ',
    s2NoteLink: 'connect Philips Hue lights',
    s2NoteAfter: ' to brighten with it.',
    s3Title: 'Pick a sound',
    s3Text: 'Scroll through the sounds to hear a short preview of each at a moderate volume. When you have chosen one, set and save the volume you want to wake up to.',
    s4Title: 'Check the clock face',
    s4Text: 'Alarms in the next 24 hours show below the current time, in order. If the wind down reminder is on, it shows there too.',
    faceAria: 'Clock face showing 23:14 with the next alarm at 07:00 below',
    helpTitle: 'Don’t see your alarm under the time?',
    help: [
      { lead: 'Check that the alarm is turned on.', text: 'A double press on the Stop button also turns your next alarm off and on.' },
      { lead: 'Check your schedule.', text: 'Weekdays has no alarm on Saturday and Sunday, and in Custom a day can be turned off. Only alarms in the next 24 hours show.' }
    ],
    s4NoteBefore: 'To stop, snooze or skip an alarm, see ',
    s4NoteLink: 'Controls',
    s4NoteAfter: '.'
  },
  de: {
    s1Title: 'Zeitplan wählen',
    s1Text: 'Drück das Auswahlrad, um das Menü zu öffnen, geh zu „Alarm“ und dann zu „Settings“, und wähle aus, wie sich dein Alarm wiederholt. Es ist immer nur ein Zeitplan aktiv.',
    path3Aria: 'Menu, dann Alarm, dann Settings',
    defaultBadge: 'Standard',
    days: ['M', 'D', 'M', 'D', 'F', 'S', 'S'],
    schedules: [
      { name: 'Täglich wiederholen', isDefault: true, time: '07:00 jeden Tag', times: [1, 1, 1, 1, 1, 1, 1], text: 'Eine Weckzeit für jeden Tag der Woche. Auf der Uhr: „Repeat daily“.', aria: 'Alarm an allen sieben Tagen' },
      { name: 'Wochentags', time: '07:00 Montag bis Freitag', times: [1, 1, 1, 1, 1, 0, 0], text: 'Eine Weckzeit von Montag bis Freitag. Am Wochenende kein Alarm. Auf der Uhr: „Weekdays“.', aria: 'Alarm Montag bis Freitag, Samstag und Sonntag aus' },
      { name: 'Benutzerdefiniert', perDay: true, times: ['06:30', '', '07:00', '', '07:30', '09:00', ''], text: 'Eine eigene Weckzeit für jeden Tag. Einzelne Tage lassen sich ein- und ausschalten. Auf der Uhr: „Custom“.', aria: 'Alarm am Montag, Mittwoch, Freitag und Samstag; Dienstag, Donnerstag und Sonntag aus' }
    ],
    s1Note: 'Die Weckzeiten bleiben in jedem Zeitplan gespeichert. So kannst du zwischen den Zeitplänen wechseln, ohne sie neu einzustellen.',
    s2Title: 'Aufwachlicht einschalten',
    s2Text: 'Du findest es in denselben Alarm-Einstellungen, direkt neben dem Zeitplan. Das Nachtlicht wird vor deinem Alarm langsam heller, sodass du sanft mit Licht statt nur mit einem Weckton aufwachst.',
    path4Aria: 'Menu, dann Alarm, dann Settings, dann Wake-up light',
    lightStarts: 'Licht startet',
    alarm: 'Alarm',
    chipsAria: 'Optionen für das Aufwachlicht',
    off: 'Aus',
    defaultSmall: 'Standard',
    s2NoteBefore: 'Die Einstellung gilt für alle aktiven Alarme, unabhängig vom Zeitplan. Du kannst auch ',
    s2NoteLink: 'Philips Hue Lampen verbinden',
    s2NoteAfter: ', die dann gemeinsam mit dem Aufwachlicht heller werden.',
    s3Title: 'Weckton auswählen',
    s3Text: 'Scroll durch die Töne, um von jedem eine kurze Vorschau in mittlerer Lautstärke zu hören. Wenn du dich für einen entschieden hast, stell die gewünschte Lautstärke zum Aufwachen ein und speichere sie.',
    s4Title: 'Zifferblatt prüfen',
    s4Text: 'Alarme in den nächsten 24 Stunden werden der Reihe nach unter der aktuellen Uhrzeit angezeigt. Ist die Schlafenszeit-Erinnerung aktiv, erscheint sie dort ebenfalls.',
    faceAria: 'Zifferblatt mit 23:14 Uhr und dem nächsten Alarm um 07:00 darunter',
    helpTitle: 'Dein Alarm wird nicht unter der Uhrzeit angezeigt?',
    help: [
      { lead: 'Prüfe, ob der Alarm eingeschaltet ist.', text: 'Doppelt auf die Stopp-Taste drücken schaltet deinen nächsten Alarm ebenfalls aus und wieder ein.' },
      { lead: 'Prüfe deinen Zeitplan.', text: 'Bei „Wochentags“ gibt es samstags und sonntags keinen Alarm, und bei „Benutzerdefiniert“ kann ein Tag ausgeschaltet sein. Es werden nur Alarme in den nächsten 24 Stunden angezeigt.' }
    ],
    s4NoteBefore: 'Wie du einen Alarm beendest, auf Snooze stellst oder überspringst, erfährst du unter ',
    s4NoteLink: 'Bedienung',
    s4NoteAfter: '.'
  }
}

export default {
  name: 'AlarmSteps',
  setup() {
    const { code, link } = useLocale()
    const t = computed(() => TEXT[code.value])
    return { t, link }
  }
}
</script>

<style>
.as {
  /* Habity brand via VitePress theme tokens, with the site's values as fallbacks */
  --as-ink: var(--vp-c-text-1, #252421);
  --as-ink-2: var(--vp-c-text-2, #5a5649);
  --as-bg: var(--vp-c-bg, #f7f4e6);
  --as-soft: var(--vp-c-bg-soft, #eeebd8);
  --as-divider: var(--vp-c-divider, #d8d4be);
  --as-accent: var(--vp-c-brand-1, #f3bb14);
  --as-on-accent: var(--vp-button-brand-text, #252421);
  /* e-paper display: always white with dark ink, in both themes */
  --as-screen: #ffffff;
  --as-screen-ink: #1c1b19;
  color: var(--as-ink);
  margin: 24px 0;
}
.as * { box-sizing: border-box; }
.as .as-steps { list-style: none; margin: 0; padding: 0; display: grid; gap: 0; }
.as .as-steps > li { margin: 0; }

.as-step {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr);
  column-gap: 16px;
  position: relative;
  padding-bottom: 32px;
}
.as-step:last-child { padding-bottom: 0; }
.as-step::before {
  content: "";
  position: absolute;
  left: 15.5px;
  top: 36px;
  bottom: 4px;
  width: 1px;
  background: var(--as-divider);
}
.as-step:last-child::before { display: none; }
.as-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--as-accent);
  color: var(--as-on-accent);
  font-weight: 600;
  font-size: 15px;
  font-variant-numeric: tabular-nums;
}
.as-body { display: grid; gap: 10px; min-width: 0; padding-top: 3px; }
.as .as-title { margin: 0; padding: 0; border: 0; font-size: 19px; line-height: 1.35; }
.as .as-text { margin: 0; color: var(--as-ink-2); font-size: 15px; line-height: 1.6; }
.as .as-note { margin: 0; color: var(--as-ink-2); font-size: 14px; line-height: 1.55; }
.as .as-note a { color: inherit; font-weight: 600; text-decoration: underline; }

.as-card {
  background: var(--as-bg);
  border: 1px solid var(--as-divider);
  border-radius: 14px;
  padding: 14px 16px;
}

/* schedules */
.as .as-sched {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 10px;
}
.as .as-sched > li { margin: 0; display: grid; gap: 8px; align-content: start; }
.as-card-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.as-card-title { font-size: 15px; font-weight: 600; }
.as-badge { font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 999px; background: var(--as-accent); color: var(--as-on-accent); }

/* menu path */
.as .as-path { margin: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 6px; font-size: 13px; }
.as-path span { background: var(--as-soft); border: 1px solid var(--as-divider); border-radius: 6px; padding: 1px 8px; font-weight: 600; }
.as-path i { font-style: normal; color: var(--as-ink-2); }

/* help box */
.as-help { background: var(--as-soft); border-radius: 12px; padding: 12px 14px; display: grid; gap: 6px; }
.as-help-title { font-size: 14px; font-weight: 600; }
.as .as-help-list { margin: 0; padding-left: 18px; display: grid; gap: 4px; font-size: 14px; line-height: 1.5; color: var(--as-ink-2); }
.as .as-help-list li { margin: 0; }
.as-help-list li span { color: var(--as-ink); font-weight: 600; }
.as-week { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 2px; }
.as-day { display: grid; justify-items: center; gap: 3px; }
.as-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1.5px solid var(--as-divider);
  background: transparent;
}
.as-dot.on { background: var(--as-accent); border-color: var(--as-accent); }
.as-dname { font-size: 11px; font-weight: 600; color: var(--as-ink-2); }
.as-dtime.off { opacity: 0.6; }
.as-dtime { font-size: 10px; color: var(--as-ink-2); font-variant-numeric: tabular-nums; letter-spacing: -0.02em; }
.as-one { font-size: 13px; font-weight: 600; font-variant-numeric: tabular-nums; }
.as-card-text { font-size: 13px; line-height: 1.5; color: var(--as-ink-2); }

/* wake-up light ramp */
.as-ramp-card { display: grid; gap: 8px; }
.as-ramp { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 8px; }
.as-ramp-bar {
  height: 14px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, var(--as-accent));
  box-shadow: inset 0 0 0 1px var(--as-divider);
}
.as-bell {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--as-accent);
  color: var(--as-on-accent);
}
.as-bell svg { width: 17px; height: 17px; }
.as-ramp-labels { display: flex; justify-content: space-between; font-size: 12px; color: var(--as-ink-2); padding-right: 4px; }
.as-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
.as-chip {
  font-size: 13px;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--as-soft);
  color: var(--as-ink);
  font-variant-numeric: tabular-nums;
}
.as-chip small { color: var(--as-ink-2); font-size: 11px; margin-left: 2px; }

/* clock face */
.as-face {
  justify-self: start;
  display: grid;
  justify-items: center;
  gap: 2px;
  background: var(--as-screen);
  color: var(--as-screen-ink);
  border-radius: 14px;
  border: 1px solid var(--as-divider);
  padding: 16px 36px 14px;
}
.as-face-time { font-size: 36px; font-weight: 500; line-height: 1.1; font-variant-numeric: tabular-nums; letter-spacing: 0.02em; }
.as-face-alarm { display: inline-flex; align-items: center; gap: 4px; font-size: 13px; opacity: 0.85; font-variant-numeric: tabular-nums; }
.as-face-alarm svg { width: 14px; height: 14px; }
</style>
