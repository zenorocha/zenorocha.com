const categories = [
  {
    name: 'Desk',
    items: [
      {
        title: 'MacBook Pro (14", 2021)',
        description:
          'The M1 chip is just amazing. Plus, 16 GB RAM and 1TB storage.',
        url: 'https://amzn.to/3pVZUNz',
      },
      {
        title: 'Apple Magic Trackpad',
        description:
          "After years of using the laptop only, I can't go back to a mouse.",
        url: 'https://amzn.to/3mAOcFW',
      },
      {
        title: 'Dell UltraSharp 27" 4K Monitor ',
        description: 'I love being able to charge my computer via USB-C.',
        url: 'https://amzn.to/3jYKLqQ',
      },
      {
        title: 'Living Spaces Hollis Desk',
        description:
          'Nothing fancy over here, just a table that fits my office.',
        url: 'https://www.livingspaces.com/pdp-hollis-writing-desk-225568',
      },
      {
        title: 'Herman Miller Sayl Chair',
        description: 'I sit all day, so I might as well get a good chair.',
        url: 'https://store.hermanmiller.com/home-office-chairs/sayl-chair/2294.html',
      },
    ],
  },
  {
    name: 'Keyboard',
    items: [
      {
        title: 'GMK Dracula',
        description: 'The single most beautiful keycaps ever created :P',
        url: 'https://omnitype.com/products/gmk-dracula',
      },
      {
        title: 'Keychron K6',
        description:
          'My preferred wireless keyboard with a 65% compact layout.',
        url: 'https://amzn.to/3bvnYOW',
      },
      {
        title: 'Drop Ctrl',
        description:
          'This is my backup mechanical keyboard with Cherry MX Brown switches.',
        url: 'https://drop.com/buy/drop-ctrl-mechanical-keyboard',
      },
      {
        title: 'Drink Artisan Keycap',
        description:
          'My favorite drink is <a href="https://en.wikipedia.org/wiki/Caipirinha">caipirinha</a>, so I replaced my ESC key with this.',
        url: 'https://drop.com/buy/drop-ctrl-mechanical-keyboard',
      },
    ],
  },
  {
    name: 'Coding',
    items: [
      {
        title: 'VSCode',
        description:
          'After using Sublime for many years, I moved to VSCode like everybody else.',
        url: 'https://code.visualstudio.com',
      },
      {
        title: 'Dracula PRO',
        description:
          'This is the theme I created, maintain, and proudly use everywhere.',
        url: 'https://draculatheme.com/pro',
      },
      {
        title: 'Fira Code',
        description:
          'I absolutely love this monospaced font because of all the ligatures.',
        url: 'https://github.com/tonsky/FiraCode',
      },
    ],
  },
  {
    name: 'Terminal',
    items: [
      {
        title: 'Hyper',
        description:
          "Performance could be better, but I enjoy using this since it's made with JavaScript.",
        url: 'https://hyper.is',
      },
      {
        title: 'Oh My ZSH',
        description:
          "A collection of ZSH plugins that you install once and you're ready to go.",
        url: 'https://ohmyz.sh',
      },
      {
        title: 'Fig',
        description:
          'Super cool app that adds VSCode-style autocomplete to your existing terminal',
        url: 'http://fig.io',
      },
    ],
  },
  {
    name: 'Apps',
    items: [
      {
        title: '1Password',
        description: 'The first thing I install on any new device.',
        url: 'https://1password.com',
      },
      {
        title: 'Alfred',
        description:
          'My favorite Spotlight replacement with <a href="https://github.com/zenorocha/alfred-workflows" target="_blank">tons of workflows</a>.',
        url: 'https://alfredapp.com',
      },
      {
        title: 'Bartender',
        description: 'Perfect way to declutter and manage the macOS menubar.',
        url: 'https://www.macbartender.com/Bartender4',
      },
      {
        title: 'CleanShot X',
        description:
          'This is what I use whenever I need to share and/or highlight screenshots.',
        url: 'https://cleanshot.com',
      },
      {
        title: 'Divvy',
        description: 'Tiny app that I use to create custom window positions.',
        url: 'https://mizage.com/divvy',
      },
      {
        title: 'Figma',
        description:
          'I never thought something would replace the Adobe suite for me. Figma did.',
        url: 'https://figma.com',
      },
      {
        title: 'Grammarly',
        description:
          'A must-have tool for non-native English speakers like me.',
        url: 'https://grammarly.com/',
      },
      {
        title: 'iStat Menu',
        description: 'A little system monitoring tool that sits on my menubar.',
        url: 'https://bjango.com/mac/istatmenus/',
      },
      {
        title: 'Linear',
        description: 'A totally gorgeous issue tracker. Jira no more.',
        url: 'https://linear.app/',
      },
      {
        title: 'Notion',
        description: 'My personal OS with all the notes from all my projects.',
        url: 'https://www.notion.so/',
      },
      {
        title: 'Paw',
        description:
          'A native macOS app that facilitates triggering HTTP requests.',
        url: 'https://paw.cloud',
      },
      {
        title: 'Things',
        description:
          'My current choice for to-do lists and organizing personal tasks.',
        url: 'https://culturedcode.com/things/',
      },
      {
        title: 'TunnelBear',
        description:
          'Wonderful VPN app that I use to access content from other countries.',
        url: 'https://www.tunnelbear.com/',
      },
      {
        title: 'Superhuman',
        description:
          'I never thought I would pay to use email until I found this.',
        url: 'https://superhuman.com/',
      },
    ],
  },
  {
    name: 'Services',
    items: [
      {
        title: 'Algolia',
        description:
          'My first choice when adding search capabilities to any project.',
        url: 'https://www.algolia.com',
      },
      {
        title: 'Cloudflare',
        description:
          'The DNS service I use with all my domains. Amazing product.',
        url: 'https://www.cloudflare.com',
      },
      {
        title: 'Collective',
        description:
          'This is what I used to create and maintain my <em>company of one</em>.',
        url: 'https://www.collective.com',
      },
      {
        title: 'Firebase',
        description:
          'A no-brainer database and auth solution for side projects.',
        url: 'https://firebase.google.com',
      },
      {
        title: 'Google Domains',
        description: 'I buy and renew all my domains here.',
        url: 'https://domains.google',
      },
      {
        title: 'Gumroad',
        description: 'The platform I use as a creator to sell things online.',
        url: 'https://app.gumroad.com/signup?referrer=draculatheme',
      },
      {
        title: 'Ilo',
        description:
          'An analytics tool to measure the impact of my tweets and stuff.',
        url: 'https://ilo.so',
      },
      {
        title: 'Infisical',
        description:
          'An open-source secrets manager for developers.',
        url: 'https://infisical.com',
      },
      {
        title: 'Kayak',
        description:
          'This makes it easier to find flight itineraries and share them with family.',
        url: 'https://kayak.com',
      },
      {
        title: 'Resend',
        description:
          'The new email API for developers.',
        url: 'https://resend.com',
      },
      {
        title: 'Vercel',
        description:
          'Here is where I host all my websites. By far the best developer experience.',
        url: 'https://vercel.com',
      },
    ],
  },
  {
    name: 'Recording',
    items: [
      {
        title: 'Sony Alpha 7C',
        description:
          'Awesome build quality and image. The flip-out LCD screen is super useful.',
        url: 'https://amzn.to/2ZRB1rx',
      },
      {
        title: 'Tamron 28-75mm Lens',
        description:
          'The cheapest option I could find. No idea how these lenses work.',
        url: 'https://amzn.to/3By5E21',
      },
      {
        title: 'Elgato Camlink',
        description:
          'This weird thing that allows you to use DSLR cameras as webcams.',
        url: 'https://amzn.to/3bzME8Y',
      },
      {
        title: 'Elgato Key Light',
        description:
          "I keep this turned on, so people don't think I work from a dungeon.",
        url: 'https://amzn.to/3CD0Euh',
      },
    ],
  },
  {
    name: 'Screenshare',
    items: [
      {
        title: 'Screenflow',
        description:
          'I hate editing videos. Screenflow makes it so much easier.',
        url: 'https://www.telestream.net/screenflow/',
      },
      {
        title: 'Mouseposé',
        description:
          "Everybody asks me about this. It's a great way to highlight things.",
        url: 'https://boinx.com/mousepose/',
      },
    ],
  },
  {
    name: 'Audio',
    items: [
      {
        title: 'Blue Yeti X',
        description: 'Pretty flexible USB condenser microphone.',
        url: 'https://amzn.to/3nJlpOU',
      },
      {
        title: 'Blue Compass Boom Arm',
        description:
          "If you're into cable management, you'll appreciate this thing.",
        url: 'https://amzn.to/3nOHPOI',
      },
      {
        title: 'AirPods Max (Silver)',
        description:
          'By far the best headphones I ever had. Premium quality, solid build.',
        url: 'https://amzn.to/3gnkaSb',
      },
    ],
  },
  {
    name: 'Finance',
    items: [
      {
        title: 'Betterment',
        description:
          'My favorite investing platform, which consistently returns ~16% earnings.',
        url: 'http://betterment.com/invite/zenorochabuenonetto',
      },
      {
        title: 'Mint',
        description:
          'All my accounts are connected in one place, so I can see a big picture of everything.',
        url: 'https://mint.com',
      },
      {
        title: 'Coinbase',
        description:
          "I'm not obsessed with crypto, but I still have some small investments there. My portfolio is made of ETH, BTC, SOL, DOGE, and SHIB.",
        url: 'https://coinbase.com/join/rocha_12',
      },
    ],
  },
  {
    name: 'Reading',
    items: [
      {
        title: 'Kindle Oasis',
        description:
          'I particularly like this device since it has built-in lights and physical buttons.',
        url: 'https://amzn.to/3mAbMmm',
      },
      {
        title: 'Audible',
        description:
          'The perfect choice to listen to a book while running outside.',
        url: 'https://www.audible.com/',
      },
    ],
  },
]

export default categories
