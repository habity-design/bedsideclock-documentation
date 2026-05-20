

## Current firmware version


<div id="firmware-widget" style="margin: 1rem 0;"></div>

<script>
if (typeof window !== 'undefined') {
  fetch('https://habity-ota.habity.design/api/ota/status')
    .then(res => res.json())
    .then(data => {
      document.getElementById('firmware-widget').innerHTML = `
        <div style="
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin: 1rem 0;
        ">
          <div style="
            flex: 1;
            min-width: 140px;
            background: var(--vp-c-bg-soft);
            border: 1px solid var(--vp-c-divider);
            border-radius: 8px;
            padding: 1rem 1.25rem;
          ">
            <div style="font-size: 12px; color: var(--vp-c-text-2); margin-bottom: 4px;">Latest version</div>
            <div style="font-size: 24px; font-weight: 700; font-family: 'Libre Baskerville', serif;">${data.remote || '—'}</div>
          </div>
          <div style="
            flex: 1;
            min-width: 140px;
            background: var(--vp-c-bg-soft);
            border: 1px solid var(--vp-c-divider);
            border-radius: 8px;
            padding: 1rem 1.25rem;
          ">
            <div style="font-size: 12px; color: var(--vp-c-text-2); margin-bottom: 4px;">Status</div>
            <div style="font-size: 15px; font-weight: 600; display: flex; align-items: center; gap: 6px;">
              <span style="
                width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
                background: ${data.update_available ? '#F3BB14' : '#4ade80'};
              "></span>
              ${data.update_available ? 'Update available' : 'Up to date'}
            </div>
          </div>
        </div>
      `
    })
    .catch(() => {
      document.getElementById('firmware-widget').innerHTML =
        '<p style="color: var(--vp-c-text-2); font-size: 14px;">Could not load firmware info.</p>'
    })
}
</script>