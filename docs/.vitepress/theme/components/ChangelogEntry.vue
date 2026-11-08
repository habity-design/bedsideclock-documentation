<!--
  ChangelogEntry.vue — one collapsible version row for the Habity support changelog.
  Write the release notes as normal Markdown inside it (leave a blank line after the opening tag):

    <ChangelogEntry version="1.2.5" latest>

    - Show today's date on the watch face.

    </ChangelogEntry>

  `latest` adds the badge and opens the row by default.
  Colors and fonts come from the VitePress theme.
-->
<template>
  <details class="cl" :open="latest">
    <summary class="cl-sum">
      <span class="cl-version">Update {{ version }}</span>
      <span v-if="latest" class="cl-badge">Latest</span>
      <span v-if="count" class="cl-count">{{ count }} {{ count === 1 ? 'change' : 'changes' }}</span>
      <svg class="cl-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
    </summary>
    <div ref="body" class="cl-body">
      <slot />
    </div>
  </details>
</template>

<script>
export default {
  name: 'ChangelogEntry',
  props: {
    version: { type: String, required: true },
    latest: { type: Boolean, default: false }
  },
  data() {
    return { count: 0 }
  },
  mounted() {
    // count the bullet points so the closed row still says how much changed
    this.count = this.$refs.body ? this.$refs.body.querySelectorAll('li').length : 0
  }
}
</script>

<style>
.cl {
  --cl-ink: var(--vp-c-text-1, #252421);
  --cl-ink-2: var(--vp-c-text-2, #5a5649);
  --cl-bg: var(--vp-c-bg, #f7f4e6);
  --cl-soft: var(--vp-c-bg-soft, #eeebd8);
  --cl-divider: var(--vp-c-divider, #d8d4be);
  --cl-accent: var(--vp-c-brand-1, #f3bb14);
  --cl-on-accent: var(--vp-button-brand-text, #252421);
  border: 1px solid var(--cl-divider);
  border-radius: 14px;
  background: var(--cl-bg);
  margin: 10px 0;
  color: var(--cl-ink);
}
.cl[open] { background: var(--cl-bg); }
.cl-sum {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  cursor: pointer;
  border-radius: 14px;
  user-select: none;
}
.cl-sum::-webkit-details-marker { display: none; }
.cl-sum:focus-visible { outline: 2px solid var(--cl-accent); outline-offset: 2px; }
.cl-version { font-weight: 600; font-size: 16px; font-variant-numeric: tabular-nums; }
.cl-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--cl-accent);
  color: var(--cl-on-accent);
}
.cl-count { margin-left: auto; font-size: 13px; color: var(--cl-ink-2); white-space: nowrap; }
.cl-chev { width: 18px; height: 18px; color: var(--cl-ink-2); flex: none; transition: transform .2s; }
.cl-count + .cl-chev { margin-left: 0; }
.cl-badge + .cl-chev, .cl-version + .cl-chev { margin-left: auto; }
.cl[open] .cl-chev { transform: rotate(180deg); }

.cl-body {
  padding: 0 16px 14px;
  border-top: 1px solid var(--cl-divider);
  margin: 0 16px;
  padding-left: 0;
  padding-right: 0;
  padding-top: 12px;
  font-size: 15px;
  line-height: 1.6;
}
.cl-body > :first-child { margin-top: 0 !important; }
.cl-body > :last-child { margin-bottom: 0 !important; }
.vp-doc .cl-body p { margin: 8px 0; color: var(--cl-ink-2); }
.vp-doc .cl-body ul { margin: 8px 0; padding-left: 20px; }
.vp-doc .cl-body li + li { margin-top: 4px; }
.vp-doc .cl-body .custom-block { margin: 12px 0; }

@media (prefers-reduced-motion: reduce) { .cl-chev { transition: none; } }
</style>
