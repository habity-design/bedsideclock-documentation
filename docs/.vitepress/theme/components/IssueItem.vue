<!--
  IssueItem.vue — one collapsible troubleshooting issue for the Habity support site.
  Write the fix as normal Markdown inside it (leave a blank line after the opening tag):

    <IssueItem title="No sound">

    Your clock might not have enough power to play audio...

    </IssueItem>

  Each issue gets a link from its title (e.g. #no-sound). Opening that link opens the issue.
  Same look as ChangelogEntry. Colors and fonts come from the VitePress theme.
-->
<template>
  <details :id="slug" ref="el" class="cl ii" :open="isOpen" @toggle="onToggle">
    <summary class="cl-sum">
      <span class="cl-version">{{ title }}</span>
      <svg class="cl-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
    </summary>
    <div class="cl-body">
      <slot />
    </div>
  </details>
</template>

<script>
export default {
  name: 'IssueItem',
  props: {
    title: { type: String, required: true },
    open: { type: Boolean, default: false }
  },
  data() {
    return { isOpen: this.open }
  },
  computed: {
    slug() {
      return this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    }
  },
  mounted() {
    this._onHash = () => {
      if (window.location.hash.slice(1) === this.slug) {
        this.isOpen = true
        this.$nextTick(() => this.$refs.el && this.$refs.el.scrollIntoView({ block: 'start' }))
      }
    }
    this._onHash()
    window.addEventListener('hashchange', this._onHash)
  },
  beforeUnmount() {
    window.removeEventListener('hashchange', this._onHash)
  },
  methods: {
    onToggle(e) {
      this.isOpen = e.target.open
    }
  }
}
</script>

<style>
/* Shares the .cl look with ChangelogEntry.vue; repeated here so each component works on its own. */
.cl {
  --cl-ink: var(--vp-c-text-1, #252421);
  --cl-ink-2: var(--vp-c-text-2, #5a5649);
  --cl-bg: var(--vp-c-bg, #f7f4e6);
  --cl-divider: var(--vp-c-divider, #d8d4be);
  --cl-accent: var(--vp-c-brand-1, #f3bb14);
  border: 1px solid var(--cl-divider);
  border-radius: 14px;
  background: var(--cl-bg);
  margin: 10px 0;
  color: var(--cl-ink);
  scroll-margin-top: calc(var(--vp-nav-height, 64px) + 16px);
}
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
.cl-version { font-weight: 600; font-size: 16px; }
.cl-chev { width: 18px; height: 18px; color: var(--cl-ink-2); flex: none; margin-left: auto; transition: transform .2s; }
.cl[open] .cl-chev { transform: rotate(180deg); }
.cl-body {
  border-top: 1px solid var(--cl-divider);
  margin: 0 16px;
  padding: 12px 0 14px;
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
