<!--
  HueSteps.vue — Philips Hue setup as numbered steps for the Habity support site.
  Use it twice under your own Markdown headings, so they stay in the page outline:

    ## Connect Philips Hue
    <HueSteps part="connect" />

    ## Program Hue controls
    <HueSteps part="controls" />

  Static, no interaction. Colors and fonts come from the VitePress theme.
  Text mirrors support.habity.design/Connectivity/Philips_Hue.html.
-->
<template>
  <div class="hs">
    <!-- CONNECT -->
    <template v-if="part === 'connect'">
      <p class="hs-before">
        <strong>Before you start:</strong> your clock needs to be on your home Wi-Fi.
        <a href="/Connectivity/Connect_to_Wi-Fi">Connect to Wi-Fi</a>
      </p>

      <ol class="hs-steps">
        <li class="hs-step">
          <span class="hs-num" aria-hidden="true">1</span>
          <div class="hs-body">
            <h3 class="hs-title">Open the Hue tab</h3>
            <p class="hs-text">Go to the <a href="/Connectivity/Connect_to_Wi-Fi">web control site</a> and open the “Hue” tab.</p>
            <p class="hs-path" aria-label="Web control, then Hue"><span>Web control</span><i aria-hidden="true">›</i><span>Hue</span></p>
          </div>
        </li>

        <li class="hs-step">
          <span class="hs-num" aria-hidden="true">2</span>
          <div class="hs-body">
            <h3 class="hs-title">Find your bridge</h3>
            <p class="hs-text">The clock looks for your Hue bridge on your network and finds it automatically.</p>
            <div class="hs-help">
              <strong class="hs-help-title">Bridge not found?</strong>
              <p>Some devices can get in the way. Try turning off other smart devices, like smart speakers or TVs, for a moment.</p>
            </div>
          </div>
        </li>

        <li class="hs-step">
          <span class="hs-num" aria-hidden="true">3</span>
          <div class="hs-body">
            <h3 class="hs-title">Pair with your bridge</h3>
            <p class="hs-text">Press the big round button on top of your Hue bridge, then press “Pair now” on the web control site. The clock then pairs with your bridge.</p>
            <div class="hs-card hs-pair">
              <div class="hs-pair-item">
                <svg class="hs-bridge" viewBox="0 0 80 80" aria-hidden="true">
                  <rect x="6" y="6" width="68" height="68" rx="16" fill="var(--hs-bg)" stroke="var(--hs-ink)" stroke-width="2" />
                  <circle cx="40" cy="40" r="15" fill="#3b8fd9" stroke="var(--hs-ink)" stroke-width="2" />
                </svg>
                <span class="hs-pair-label"><b>1.</b> Press the button on the bridge</span>
              </div>
              <svg class="hs-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
              <div class="hs-pair-item">
                <span class="hs-ui-btn">Pair now</span>
                <span class="hs-pair-label"><b>2.</b> Press Pair now on the web control site</span>
              </div>
            </div>
            <div class="hs-help">
              <strong class="hs-help-title">Can’t pair?</strong>
              <p>Check that the clock found the right IP address for your Hue bridge, and that no settings on your home network are blocking the connection.</p>
            </div>
          </div>
        </li>

        <li class="hs-step">
          <span class="hs-num" aria-hidden="true">4</span>
          <div class="hs-body">
            <h3 class="hs-title">Load your lights</h3>
            <p class="hs-text">Once paired, press “Update” to load your scenes, rooms and areas from the Philips Hue app.</p>
            <div class="hs-card hs-load">
              <span class="hs-ui-btn">Update</span>
              <svg class="hs-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
              <span class="hs-chips"><span class="hs-chip">Scenes</span><span class="hs-chip">Rooms</span><span class="hs-chip">Areas</span></span>
            </div>
          </div>
        </li>
      </ol>
    </template>

    <!-- CONTROLS -->
    <template v-else>
      <ol class="hs-steps">
        <li class="hs-step">
          <span class="hs-num" aria-hidden="true">1</span>
          <div class="hs-body">
            <h3 class="hs-title">Choose what the buttons do</h3>
            <p class="hs-text">On the web control site, choose a Hue action for the Stop button, the Snooze button or both, and press Save. An action can turn on a scene or turn off your lights.</p>
            <ul class="hs-btns">
              <li v-for="b in buttons" :key="b.name" class="hs-card hs-btn-card">
                <span class="hs-btn-icon" v-html="b.icon" aria-hidden="true"></span>
                <span class="hs-btn-text">
                  <strong>{{ b.name }}</strong>
                  <span>{{ b.where }}</span>
                </span>
              </li>
            </ul>
          </div>
        </li>

        <li class="hs-step">
          <span class="hs-num" aria-hidden="true">2</span>
          <div class="hs-body">
            <h3 class="hs-title">Press and hold to use it</h3>
            <p class="hs-text">Press and hold the button on your clock to run the Hue action you chose.</p>
            <div class="hs-card hs-gesture">
              <span class="hs-g" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5" fill="currentColor" /><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8" /></svg></span>
              <span class="hs-btn-text">
                <span class="hs-gname">Press and hold</span>
                <strong>Runs your Hue action</strong>
              </span>
            </div>
          </div>
        </li>

        <li class="hs-step">
          <span class="hs-num" aria-hidden="true">3</span>
          <div class="hs-body">
            <h3 class="hs-title">Wake up with your Hue lights</h3>
            <p class="hs-text">The Hue wake-up light works together with the clock’s built-in light, so your room brightens before the alarm. For this to work, the wake-up light must be turned on in the clock’s alarm settings.</p>
            <p class="hs-path" aria-label="Menu, then Alarm, then Settings, then Wake-up light"><span>Menu</span><i aria-hidden="true">›</i><span>Alarm</span><i aria-hidden="true">›</i><span>Settings</span><i aria-hidden="true">›</i><span>Wake-up light</span></p>
            <p class="hs-note">See <a href="/Alarm/How_to_set_my_alarm">How to set up your alarm</a> for the wake-up light options.</p>
          </div>
        </li>
      </ol>
    </template>
  </div>
</template>

<script>
export default {
  name: 'HueSteps',
  props: {
    part: { type: String, default: 'connect' }
  },
  data() {
    return {
      buttons: [
        {
          name: 'Stop button',
          where: 'The small round button on top.',
          icon: '<svg viewBox="0 0 40 24"><circle cx="20" cy="12" r="8.5" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.6"/></svg>'
        },
        {
          name: 'Snooze button',
          where: 'The long bar on top.',
          icon: '<svg viewBox="0 0 40 24"><rect x="3" y="7.5" width="34" height="9" rx="4.5" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.6"/></svg>'
        }
      ]
    }
  }
}
</script>

<style>
.hs {
  --hs-ink: var(--vp-c-text-1, #252421);
  --hs-ink-2: var(--vp-c-text-2, #5a5649);
  --hs-bg: var(--vp-c-bg, #f7f4e6);
  --hs-soft: var(--vp-c-bg-soft, #eeebd8);
  --hs-divider: var(--vp-c-divider, #d8d4be);
  --hs-accent: var(--vp-c-brand-1, #f3bb14);
  --hs-on-accent: var(--vp-button-brand-text, #252421);
  color: var(--hs-ink);
  margin: 20px 0 32px;
  display: grid;
  gap: 20px;
}
.hs * { box-sizing: border-box; }
.hs a { color: inherit; font-weight: 600; text-decoration: underline; }

.hs .hs-before {
  margin: 0;
  background: var(--hs-soft);
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 14px;
  line-height: 1.55;
  color: var(--hs-ink-2);
}
.hs-before strong { color: var(--hs-ink); }
.hs-before a { margin-left: 4px; }

.hs .hs-steps { list-style: none; margin: 0; padding: 0; display: grid; }
.hs .hs-steps > li { margin: 0; }
.hs-step {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr);
  column-gap: 16px;
  position: relative;
  padding-bottom: 32px;
}
.hs-step:last-child { padding-bottom: 0; }
.hs-step::before {
  content: "";
  position: absolute;
  left: 15.5px;
  top: 36px;
  bottom: 4px;
  width: 1px;
  background: var(--hs-divider);
}
.hs-step:last-child::before { display: none; }
.hs-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--hs-accent);
  color: var(--hs-on-accent);
  font-weight: 600;
  font-size: 15px;
  font-variant-numeric: tabular-nums;
}
.hs-body { display: grid; gap: 10px; min-width: 0; padding-top: 3px; }
.hs .hs-title { margin: 0; padding: 0; border: 0; font-size: 19px; line-height: 1.35; }
.hs .hs-text { margin: 0; color: var(--hs-ink-2); font-size: 15px; line-height: 1.6; }
.hs .hs-note { margin: 0; color: var(--hs-ink-2); font-size: 14px; line-height: 1.55; }

.hs .hs-path { margin: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 6px; font-size: 13px; }
.hs-path span { background: var(--hs-soft); border: 1px solid var(--hs-divider); border-radius: 6px; padding: 1px 8px; font-weight: 600; }
.hs-path i { font-style: normal; color: var(--hs-ink-2); }

.hs-card {
  background: var(--hs-bg);
  border: 1px solid var(--hs-divider);
  border-radius: 14px;
  padding: 14px 16px;
}

.hs-help { background: var(--hs-soft); border-radius: 12px; padding: 12px 14px; display: grid; gap: 4px; }
.hs-help-title { font-size: 14px; font-weight: 600; }
.hs .hs-help p { margin: 0; font-size: 14px; line-height: 1.5; color: var(--hs-ink-2); }

/* pairing visual */
.hs-pair { display: flex; align-items: center; justify-content: center; gap: 14px; flex-wrap: wrap; }
.hs-pair-item { display: grid; justify-items: center; gap: 8px; text-align: center; flex: 1 1 120px; max-width: 200px; }
.hs-bridge { width: 64px; height: 64px; }
.hs-pair-label { font-size: 13px; line-height: 1.4; color: var(--hs-ink-2); }
.hs-pair-label b { color: var(--hs-ink); }
.hs-arrow { width: 22px; height: 22px; color: var(--hs-ink-2); flex: none; }
.hs-ui-btn {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 6px 16px;
  border-radius: 8px;
  border: 1.5px solid var(--hs-ink);
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
}
.hs-pair .hs-ui-btn { margin: 15px 0; }

/* load visual */
.hs-load { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.hs-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.hs-chip { font-size: 13px; font-weight: 500; padding: 3px 10px; border-radius: 999px; background: var(--hs-soft); }

@media (max-width: 520px) {
  .hs-pair, .hs-load { flex-direction: column; align-items: center; flex-wrap: nowrap; }
  .hs-pair .hs-arrow, .hs-load .hs-arrow { transform: rotate(90deg); }
  .hs-pair-item { flex: none; max-width: none; }
  .hs-pair .hs-ui-btn { margin: 0; }
}

/* buttons */
.hs .hs-btns { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 10px; }
.hs .hs-btns > li { margin: 0; }
.hs-btn-card, .hs-gesture { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 12px; align-items: center; }
.hs-btn-icon { width: 40px; height: 24px; display: block; }
.hs-btn-icon svg { width: 100%; height: 100%; display: block; }
.hs-btn-text { display: grid; gap: 1px; font-size: 13px; line-height: 1.45; color: var(--hs-ink-2); }
.hs-btn-text strong { font-size: 15px; font-weight: 600; color: var(--hs-ink); }
.hs-g { width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; background: var(--hs-accent); color: var(--hs-on-accent); }
.hs-g svg { width: 18px; height: 18px; }
.hs-gname { font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--hs-ink-2); }
</style>
