export default {
  title: "Habity Docs",
  base: '/habity-bedsideclock-docs/',
  appearance: 'auto',
  head: [
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
      provider: 'local'
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
          { text: 'Home Assistant', link: '/Connectivity/Home_Assistant' }
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
        <a href="https://habity.design/page/contact" target="_blank">Contact & Support</a> ·
        <a href="https://habity.design/policies/privacy-policy" target="_blank">Privacy Policy</a>
      `,
      copyright: '© 2026 Habity ApS — Designed in Copenhagen'
    },

    returnToTopLabel: 'Back to top'
  }
}