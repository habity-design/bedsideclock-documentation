export default {
  title: "Habity bedside clock manual & support",
  description: "Set up your Habity bedside clock and make the most of every morning. Find guides, tips, and everything you need to get started.",
  base: '/',
  appearance: 'auto',

  // Languages: English at the root, German under /de/
  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      link: '/de/',
      title: 'Habity-Wecker – Anleitung & Support',
      description: 'Richte deinen Habity-Wecker ein und mach das Beste aus jedem Morgen. Hier findest du Anleitungen, Tipps und alles, was du für den Start brauchst.',
      themeConfig: {
        nav: [
          { text: 'Start', link: '/de/' },
          { text: 'Erste Schritte', link: '/de/Getting_started/First_setup' },
          { text: 'habity.design', link: 'https://habity.design/de', target: '_blank' }
        ],

        sidebar: [
          {
            text: 'Erste Schritte',
            items: [
              { text: 'Ersteinrichtung', link: '/de/Getting_started/First_setup' },
              { text: 'Bedienung', link: '/de/Getting_started/Controls' }
            ]
          },
          {
            text: 'Alarm',
            items: [
              { text: 'Alarm einstellen', link: '/de/Alarm/How_to_set_my_alarm' }
            ]
          },
          {
            text: 'Schlafenszeit',
            items: [
              { text: 'Schlafenszeit-Erinnerung', link: '/de/Wind_down/Wind_down_reminder' }
            ]
          },
          {
            text: 'Schlafgeräusche',
            items: [
              { text: 'Schlafgeräusche', link: '/de/Sleep_sounds/Sleep_sounds' }
            ]
          },
          {
            text: 'Konnektivität',
            items: [
              { text: 'Mit WLAN verbinden', link: '/de/Connectivity/Connect_to_Wi-Fi' },
              { text: 'Philips Hue', link: '/de/Connectivity/Philips_Hue' },
              { text: 'Home Assistant', link: '/de/Connectivity/Home_Assistant' },
              { text: 'Homey', link: '/de/Connectivity/Homey' }
            ]
          },
          {
            text: 'Weitere Funktionen',
            items: [
              { text: 'Ruhebildschirm', link: '/de/More/Idle_screen' },
              { text: 'Reisesperre', link: '/de/More/Travel_lock' },
              { text: 'Firmware aktualisieren', link: '/de/More/How_to_update' },
              { text: 'Tipps', link: '/de/More/Tips' }
            ]
          },
          {
            text: 'Fehlerbehebung',
            items: [
              { text: 'Fehlerbehebung', link: '/de/Troubleshooting/Troubleshooting' },
              { text: 'Auf Werkseinstellungen zurücksetzen', link: '/de/Troubleshooting/Factory_reset' }
            ]
          }
        ],

        footer: {
          message: `
            <a href="https://habity.design/de" target="_blank">habity.design</a> ·
            <a href="https://habity.design/de/pages/contact" target="_blank">Kontakt & Support</a> ·
            <a href="https://habity.design/de/policies/privacy-policy" target="_blank">Datenschutzerklärung</a>
          `,
          copyright: '© 2026 Habity ApS – Entworfen in Kopenhagen'
        },

        outline: { label: 'Auf dieser Seite' },
        docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
        lastUpdated: { text: 'Zuletzt aktualisiert' },
        returnToTopLabel: 'Nach oben',
        sidebarMenuLabel: 'Menü',
        darkModeSwitchLabel: 'Darstellung',
        lightModeSwitchTitle: 'Zum hellen Modus wechseln',
        darkModeSwitchTitle: 'Zum dunklen Modus wechseln',
        langMenuLabel: 'Sprache ändern',
        skipToContentLabel: 'Zum Inhalt springen',
        notFound: {
          title: 'SEITE NICHT GEFUNDEN',
          quote: 'Diese Seite gibt es leider nicht.',
          linkLabel: 'Zur Startseite',
          linkText: 'Zur Startseite'
        }
      }
    }
  },
  head: [
[
  'script',
  {},
  `var img = new Image(); img.src = 'https://umami.habity.design/p/IKXSiVEq4'; img.referrerPolicy = 'no-referrer-when-downgrade';`
],
    ['script', { defer: '', src: 'https://umami.habity.design/script.js', 'data-website-id': '27c6f850-6799-44fa-8862-2d05f6fe39c9' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Montserrat:wght@300;400;500;600&display=swap', rel: 'stylesheet' }]
  ],
  themeConfig: {
    logo: {
      light: 'https://habity.design/cdn/shop/files/habity_logo_black.png?v=1760530239',
      dark: 'https://habity.design/cdn/shop/files/habity_logo_white_edb2e4c5-9e72-4486-984c-17f819ff668c.png?v=1760530405'
    },
    logoLink: 'https://habity.design',
    siteTitle: false,

    search: {
      provider: 'local',
      options: {
        locales: {
          de: {
            translations: {
              button: { buttonText: 'Suchen', buttonAriaLabel: 'Suchen' },
              modal: {
                displayDetails: 'Details anzeigen',
                resetButtonTitle: 'Suche zurücksetzen',
                backButtonTitle: 'Suche schließen',
                noResultsText: 'Keine Ergebnisse für',
                footer: {
                  selectText: 'Auswählen',
                  selectKeyAriaLabel: 'Eingabetaste',
                  navigateText: 'Navigieren',
                  navigateUpKeyAriaLabel: 'Pfeil nach oben',
                  navigateDownKeyAriaLabel: 'Pfeil nach unten',
                  closeText: 'Schließen',
                  closeKeyAriaLabel: 'Escape'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/habity.design/' },
      { icon: 'youtube', link: 'https://youtube.com/@habity.design' },
      { icon: 'facebook', link: 'https://www.facebook.com/habity.design' }
    ],

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/Getting_started/First_setup' },
      { text: 'habity.design', link: 'https://habity.design', target: '_blank' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'First Setup', link: '/Getting_started/First_setup' },
          { text: 'Controls', link: '/Getting_started/Controls' }
        ]
      },
      {
        text: 'Alarm',
        items: [
          { text: 'How to Set My Alarm', link: '/Alarm/How_to_set_my_alarm' }
        ]
      },
      {
        text: 'Wind down',
        items: [
          { text: 'Wind down reminder', link: '/Wind_down/Wind_down_reminder' }
        ]
      },
      {
        text: 'Sleep Sounds',
        items: [
          { text: 'Sleep Sounds', link: '/Sleep_sounds/Sleep_sounds' }
        ]
      },
      {
        text: 'Connectivity',
        items: [
          { text: 'Connect to Wi-Fi', link: '/Connectivity/Connect_to_Wi-Fi' },
          { text: 'Philips Hue', link: '/Connectivity/Philips_Hue' },
          { text: 'Home Assistant', link: '/Connectivity/Home_Assistant' },
          { text: 'Homey', link: '/Connectivity/Homey' }
        ]
      },
      {
        text: 'More',
        items: [
          { text: 'Idle Screen', link: '/More/Idle_screen' },
          { text: 'Travel Lock', link: '/More/Travel_lock' },
          { text: 'How to Update', link: '/More/How_to_update' },
          { text: 'Tips', link: '/More/Tips' }
        ]
      },
      {
        text: 'Troubleshooting',
        items: [
          { text: 'Troubleshooting', link: '/Troubleshooting/Troubleshooting' },
          { text: 'Factory Reset', link: '/Troubleshooting/Factory_reset' }
        ]
      }
    ],

    footer: {
      message: `
        <a href="https://habity.design" target="_blank">habity.design</a> ·
        <a href="https://habity.design/pages/contact" target="_blank">Contact & Support</a> ·
        <a href="https://habity.design/policies/privacy-policy" target="_blank">Privacy Policy</a>
      `,
      copyright: '© 2026 Habity ApS — Designed in Copenhagen'
    },

    returnToTopLabel: 'Back to top'
  }
}