const items = [
  {
    year: '2019',
    summary: '',
    talks: [
      {
        title: 'Liferay DevCon',
        url: 'https://www.liferay.com/web/events-devcon',
        when: 'November, 19',
        where: 'Mainz, Germany',
      },
      {
        title: 'Liferay Italy Symposium',
        url: 'https://www.liferay.com/web/events-symposium-italy',
        when: 'November, 13',
        where: 'Milan, Italy',
      },
      {
        title: 'Liferay Spain Symposium',
        url: 'https://www.liferay.com/web/events-symposium-spain',
        when: 'October, 23',
        where: 'Madrid, Spain',
      },
      {
        title: 'Liferay France Symposium',
        url: 'https://www.liferay.com/web/events-symposium-france',
        when: 'October, 9',
        where: 'Paris, France',
      }
    ]
  },
  {
    year: '2018',
    summary: '',
    talks: [
      {
        title: 'Liferay North America Symposium',
        url: 'https://www.liferay.com/web/events-symposium-north-america/',
        when: 'October, 8',
        where: 'New Orleans, LA - USA',
      },
      {
        title: 'Liferay Italy Symposium',
        url: 'https://www.liferay.com/web/events-symposium-italy',
        when: 'October, 23',
        where: 'Milan, Italy',
      },
    ]
  },
  {
    year: '2017',
    summary: '16 talks. 8 different cities in 4 different countries.',
    talks: [
      {
        title: 'Liferay South America Symposium',
        url: 'https://www.liferay.com/web/events-symposium-brazil/',
        when: 'November, 29',
        where: 'São Paulo, SP - Brazil',
        presentations: [
          {
            title: "What's new in the Liferay Community",
            url: "https://speakerdeck.com/zenorocha/whats-new-in-the-liferay-community"
          },
          {
            title: "Launching Liferay Projects Faster with WeDeploy",
            url: "https://speakerdeck.com/zenorocha/launching-liferay-projects-faster-with-wedeploy"
          },
        ],
      },
      {
        title: 'Liferay Spain Symposium',
        url: 'https://www.liferay.com/web/events-symposium-spain/',
        when: 'October, 25',
        where: 'Madrid - Spain',
        attendees: '≈360',
        presentations: [
          {
            title: "What's new in the Liferay Community",
            url: 'https://speakerdeck.com/zenorocha/whats-new-in-the-liferay-community',
          },
          {
            title: "Launching Liferay Projects Faster with WeDeploy",
            url: 'https://speakerdeck.com/zenorocha/launching-liferay-projects-faster-with-wedeploy',
          },
        ],
      },
      {
        title: 'Liferay North America Symposium',
        url: 'https://www.liferay.com/web/events-symposium-north-america/',
        when: 'October, 16',
        where: 'Austin, TX - USA',
        attendees: '≈450',
        presentations: [
          {
            title: 'Launching Liferay Projects Faster with WeDeploy',
            url: 'https://speakerdeck.com/zenorocha/launching-liferay-projects-faster-with-wedeploy',
          },
        ],
      },
      {
        title: 'Liferay DevCon',
        url: 'https://www.liferay.com/web/events-devcon/home',
        when: 'October, 4',
        where: 'Amsterdam - Netherlands',
        attendees: '≈300',
        presentations: [
          {
            title: 'How Liferay fits into the real of latest technologies',
            url: 'https://speakerdeck.com/zenorocha/how-liferay-fits-into-the-real-of-latest-technologies',
          },
          {
            title: 'Launching Liferay Projects Faster with WeDeploy',
            url: 'https://speakerdeck.com/zenorocha/launching-liferay-projects-faster-with-wedeploy',
            video: 'https://www.youtube.com/watch?v=nvH82jzlU5Y',
          },
        ],
      },
      {
        title: 'BrazilJS Fortaleza',
        url: 'https://braziljs.org/conf/',
        when: 'September, 01',
        where: 'Fortaleza, CE - Brazil',
        attendees: '≈400',
        presentations: [
          {
            title: 'Estoicismo e JavaScript',
            url: 'https://speakerdeck.com/zenorocha/estoicismo-e-javascript',
          }
        ],
      },
      {
        title: 'BrazilJS Porto Alegre',
        url: 'https://braziljs.org/conf/',
        when: 'August, 25',
        where: 'Porto Alegre, RS - Brazil',
        attendees: '≈1600',
        presentations: [
          {
            title: 'Estoicismo e JavaScript',
            url: 'https://speakerdeck.com/zenorocha/estoicismo-e-javascript',
          }
        ],
      },
      {
        title: 'Front in Sampa',
        url: 'http://www.frontinsampa.com.br/',
        when: 'July, 1',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈400',
        presentations: [
          {
            title: 'Por que ninguém se importa com seu novo projeto open source?',
            url: 'https://speakerdeck.com/zenorocha/por-que-ninguem-se-importa-com-seu-novo-projeto-open-source',
          }
        ],
        coverage: 'https://twitter.com/i/moments/881981365851275264',
      },
      {
        title: 'Meetup CSS',
        url: 'https://www.meetup.com/CSS-SP/events/239847887/',
        when: 'June, 27',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈135',
        presentations: [
          {
            title: 'Como investir em... você!',
            url: 'https://speakerdeck.com/zenorocha/como-investir-em-dot-dot-dot-voce',
          }
        ],
        coverage: 'https://twitter.com/i/moments/881992781429854208',
      },
      {
        title: 'JSSP',
        url: 'https://www.meetup.com/Javascript-SP/events/240992799/',
        when: 'June, 26',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈45',
        presentations: [
          {
            title: 'Criando apps fodas com WeDeploy',
            url: 'https://speakerdeck.com/zenorocha/criando-apps-fodas-com-wedeploy',
          }
        ],
        coverage: 'https://twitter.com/i/moments/881996334982512640',
      },
      {
        title: 'JS Experience',
        url: 'https://jsexperience2017.imasters.com.br/',
        when: 'June, 23',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈1000',
        presentations: [
          {
            title: 'Web APIs que você (provavelmente) não sabia que existiam',
            url: 'https://speakerdeck.com/zenorocha/web-apis-que-voce-provavelmente-nao-sabia-que-existiam-1',
          }
        ],
        coverage: 'https://twitter.com/i/moments/882002829472219141',
      },
      {
        title: 'Revolution Conf',
        url: 'https://revolutionconf.com',
        when: 'June, 1',
        where: 'Virginia Beach, VA - USA',
      },
      {
        title: 'JS.LA',
        url: 'http://js.la',
        when: 'May, 25',
        where: 'Santa Monica, CA - USA',
      },
      {
        title: 'JSDayES',
        url: 'http://2017.jsday.es/',
        when: 'May, 12',
        where: 'Madrid - Spain',
      }
    ],
  },
  {
    year: '2016',
    summary: '9 talks. 8 different cities in 4 different countries.',
    talks: [
      {
        title: 'Liferay Symposium - South America',
        url: 'https://web.liferay.com/web/events2016/brazil/',
        when: 'November, 30',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈400',
      },
      {
        title: 'Liferay DevCon',
        url: 'https://web.liferay.com/web/events2016/devcon/',
        when: 'November, 14',
        where: 'Darmstadt - Germany',
        attendees: '≈300',
      },
      {
        title: "UCLA's UPE",
        url: 'https://upe.seas.ucla.edu/',
        when: 'October, 3',
        where: 'Los Angeles, CA - USA',
      },
      {
        title: 'Liferay Symposium - North America',
        url: 'https://web.liferay.com/web/events2016/northamerica/',
        when: 'September, 26',
        where: 'Chicago, IL - USA',
      },
      {
        title: 'Liferay LIVE Sessions',
        url: 'https://www.liferay.com/events/web-events',
        when: 'September, 14',
        where: 'Online',
      },
      {
        title: 'NEJS Conf',
        url: 'https://2016.nejsconf.com/',
        when: 'August, 26',
        where: 'Omaha, NE - USA',
        attendees: '≈200',
        presentations: [
          {
            title: "Web APIs you (probably) didn't know existed",
            url: 'https://speakerdeck.com/zenorocha/web-apis-you-probably-didnt-know-existed',
            video: 'https://www.youtube.com/watch?v=hnkSbA4ZDGQ'
          }
        ],
        coverage: 'https://storify.com/zenorocha/nebraskajs-conference-august-2016',
      },
      {
        title: 'SFHTML5',
        url: 'http://www.meetup.com/sfhtml5/events/233029429/',
        when: 'August, 19',
        where: 'San Francisco, CA - USA',
        attendees: '≈100',
        presentations: [
          {
            title: "Web APIs you (probably) didn't know existed",
            url: 'https://speakerdeck.com/zenorocha/web-apis-you-probably-didnt-know-existed',
            video: 'https://www.youtube.com/watch?v=NCGLPp778JY',
          }
        ],
        coverage: 'https://storify.com/zenorocha/sfhtml5-august-2016',
      },
      {
        title: 'Front in BH',
        url: 'http://frontinbh.com.br/',
        when: 'August, 6',
        where: 'Belo Horizonte, MG - Brazil',
        attendees: '≈500',
        presentations: [
          {
            title: "Web APIs que você (provavelmente) não sabia que existiam",
            url: 'https://speakerdeck.com/zenorocha/web-apis-que-voce-provavelmente-nao-sabia-que-existiam',
            video: 'http://frontinbh.com.br/live.html',
          }
        ],
        coverage: 'https://storify.com/zenorocha/front-in-bh-august-2016',
      },
      {
        title: "California State Polytechnic University's SWIFT",
        url: 'https://calpolyswift.org/',
        when: 'April, 19',
        where: 'Pomona, CA - USA',
        attendees: '≈30',
        presentations: [
          {
            title: 'How to invest in... you!',
            url: 'https://speakerdeck.com/zenorocha/how-to-invest-in-dot-dot-dot-you',
          }
        ],
      },
    ],
  },
  {
    year: '2015',
    summary: '11 talks and 1 workshop. 7 different cities in 4 different countries.',
    talks: [
      {
        title: 'Liferay Symposium - South America',
        url: 'https://www.liferay.com/web/events2015/brazil',
        when: 'December, 2',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈340',
      },
      {
        title: 'Liferay Symposium - North America',
        url: 'https://www.liferay.com/web/events2015/northamerica',
        when: 'November, 16',
        where: 'Chicago, IL - USA',
        attendees: '≈600',
      },
      {
        title: 'Devfest LA',
        url: 'http://devfest.gdgla.org/',
        when: 'October, 24',
        where: 'Los Angeles, CA - USA',
        attendees: '≈50',
      },
      {
        title: 'FIAP DevDay',
        url: '',
        when: 'October, 20',
        where: 'Online',
        attendees: '≈30',
      },
      {
        title: 'Devfest Fresno',
        url: 'http://devfest.gdgfresno.com/',
        when: 'October, 17',
        where: 'Fresno, CA - USA',
        attendees: '≈50',
      },
      {
        title: 'Liferay Devcon',
        url: 'https://www.liferay.com/web/events2015/devcon',
        when: 'October, 8',
        where: 'Darmstadt - Germany',
        attendees: '≈300',
      },
      {
        title: 'Nordic.JS',
        url: 'https://nordicjs.com/2015',
        when: 'September, 10',
        where: 'Stockholm - Sweden',
        presentations: [
          {
            title: 'Crazy computer vision stuff in the browser',
            url: 'https://speakerdeck.com/zenorocha/crazy-computer-vision-stuff-in-the-browser',
            video: 'https://www.youtube.com/watch?v=2NWssETxsPw',
          }
        ],
        attendees: '≈300',
        coverage: 'https://storify.com/zenorocha/nordic-js-september-2015',
      },
      {
        title: 'Google Developer Group LA',
        url: 'http://www.meetup.com/gdg-la/events/223620789/',
        when: 'July, 16',
        where: 'Los Angeles, CA - USA',
        attendees: '≈75',
        presentations: [
          {
            title: 'A future called Web Components',
            url: 'https://speakerdeck.com/zenorocha/a-future-called-web-components',
            video: 'https://www.youtube.com/watch?v=FAguNB2Z3QU',
          }
        ],
      },
      {
        title: 'Summer Bootcamp',
        url: 'http://summerwebbootcamp.com/',
        when: 'June, 29 - July, 3',
        where: 'Fresno, CA - USA',
        attendees: '≈20',
      },
      {
        title: 'Chicago HTML5',
        url: 'http://www.meetup.com/chicago-html5/events/220468715/',
        when: 'May, 12',
        where: 'Chicago, IL - USA',
        attendees: '≈80',
        presentations: [
          {
            title: 'A future called Web Components',
            url: 'https://speakerdeck.com/zenorocha/a-future-called-web-components',
          }
        ],
        coverage: 'https://storify.com/zenorocha/chicago-html5-may-2015',
      },
      {
        title: 'Smashing Conf',
        url: 'http://smashingconf.com/',
        when: 'April, 27',
        where: 'Los Angeles, CA - USA',
        presentations: [
          {
            title: 'Crazy computer vision stuff in the browser',
            url: 'https://speakerdeck.com/zenorocha/crazy-computer-vision-stuff-in-the-browser',
          }
        ],
        attendees: '≈200',
        coverage: 'https://storify.com/zenorocha/smashing-conf-april-2015',
      },
      {
        title: 'University of California, Riverside',
        url: 'http://acm.cs.ucr.edu/',
        when: 'April, 17',
        where: 'Riverside, CA - USA',
        attendees: '≈30',
      },
    ],
  },
  {
    year: '2014',
    summary: '21 talks and 4 workshops. 18 different cities in 8 different countries.',
    talks: [
      {
        title: "California State Polytechnic University's IWDSA",
        url: 'http://www.iwdsa.org/',
        when: 'November, 26',
        where: 'Pomona, CA - USA',
        attendees: '≈30',
        presentations: [
          {
            title: 'How to invest in... you!',
            url: 'https://speakerdeck.com/zenorocha/how-to-invest-in-dot-dot-dot-you',
          }
        ],
      },
      {
        title: 'Google Developer Expert Summit',
        url: 'https://developers.google.com/experts/',
        when: 'November, 17',
        where: 'Mountain View, CA - USA',
        attendees: '≈100',
        presentations: [
          {
            title: "Why people don't care about your new open source project",
            url: 'https://speakerdeck.com/zenorocha/why-nobody-cares-about-your-new-open-source-project',
          }
        ],
      },
      {
        title: 'Liferay Symposium - Latin America',
        url: 'http://www.liferay.com/web/brazil2014',
        when: 'November, 11',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈220',
        presentations: [
          {
            title: 'Liferay + Wearables',
            url: 'http://www.slideshare.net/zenorocha/liferay-wearables-39939452',
          },
          {
            title: 'The Future of Web Development',
            url: 'http://www.slideshare.net/zenorocha/future-of-web-development',
          },
        ],
      },
      {
        title: 'Liferay DevCon',
        url: 'https://www.liferay.com/web/devcon2014',
        when: 'November, 05',
        where: 'Darmstadt - Germany',
        attendees: '≈310',
        presentations: [
          {
            title: 'Liferay + Wearables',
            url: 'http://www.slideshare.net/zenorocha/liferay-wearables-39939452',
            video: 'https://www.youtube.com/watch?v=gSKodfN7O9s',
          },
          {
            title: 'The Future of Web Development',
            url: 'http://www.slideshare.net/zenorocha/future-of-web-development',
            video: 'https://www.youtube.com/watch?v=nxXNTJgFbRA',
          },
        ],
      },
      {
        title: 'JS.LA',
        url: 'http://js.la',
        when: 'October, 30',
        where: 'Los Angeles, CA - USA',
        attendees: '≈70',
        presentations: [
          {
            title: 'A future called Web Components',
            url: 'https://speakerdeck.com/zenorocha/a-future-called-web-components',
            video: 'https://vimeo.com/111191562',
          }
        ],
        coverage: 'https://storify.com/zenorocha/jsla-october-2014',
      },
      {
        title: 'SanDiego.js',
        url: 'http://www.meetup.com/sandiegojs/events/209916642/',
        when: 'October, 28',
        where: 'San Diego, CA - USA',
        attendees: '≈40',
        presentations: [
          {
            title: 'A future called Web Components',
            url: 'https://speakerdeck.com/zenorocha/a-future-called-web-components',
          }
        ],
        coverage: 'https://storify.com/zenorocha/sandiegojs-october-2014',
      },
      {
        title: 'Liferay Symposium Spain',
        url: 'http://www.liferay.com/web/spain2014',
        when: 'October, 22',
        where: 'Madrid - Spain',
        attendees: '≈270',
        presentations: [
          {
            title: 'Liferay + Wearables',
            url: 'http://www.slideshare.net/zenorocha/liferay-wearables-39939452',
            video: 'https://www.youtube.com/watch?v=f9-wG8zvYM4',
          },
          {
            title: 'The Future of Web Development',
            url: 'http://www.slideshare.net/zenorocha/future-of-web-development',
            video: 'https://www.youtube.com/watch?v=dPDTshkh5IE',
          }
        ],
        coverage: 'https://storify.com/zenorocha/liferay-spain-symposium-october-2014',
      },
      {
        title: 'HTML5 LA',
        url: 'http://www.meetup.com/HTML5LA/events/210157532/',
        when: 'October, 10',
        where: 'Los Angeles, CA - USA',
        attendees: '≈30',
        presentations: [
          {
            title: 'Tracking.js',
            url: 'https://speakerdeck.com/zenorocha/tracking-dot-js',
          }
        ],
      },
      {
        title: 'Liferay Symposium - North America',
        url: 'http://www.liferay.com/web/northamerica2014',
        when: 'October, 05',
        where: 'Boston, MA - USA',
        attendees: '≈510',
        presentations: [
          {
            title: 'Liferay + Wearables',
            url: 'http://www.slideshare.net/zenorocha/liferay-wearables-39939452',
          },
          {
            title: 'The Future of Web Development',
            url: 'http://www.slideshare.net/zenorocha/future-of-web-development',
          },
        ],
      },
      {
        title: 'W3C Web.br',
        url: 'http://conferenciaweb.w3c.br/',
        when: 'September, 25',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈460',
        presentations: [
          {
            title: 'ZOFE ao vivo',
            url: 'https://speakerdeck.com/zenorocha/a-future-called-web-components',
            video: 'https://www.youtube.com/watch?v=YWbHcx5970g',
          }
        ],
      },
      {
        title: 'TDC - The Developers Conference',
        url: 'http://www.thedevelopersconference.com.br/#saopaulo',
        when: 'August, 05',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈300',
        presentations: [
          {
            title: 'Tracking.js: Uma nova dimensão',
            url: 'http://www.slideshare.net/zenorocha/trackingjs',
          }
        ],
      },
      {
        title: 'Coding on Weekend',
        url: 'http://codingonweekend.com.br/',
        when: 'August, 30',
        where: 'Rio de Janeiro, RJ - Brazil',
        attendees: '≈20',
      },
      {
        title: 'Front in Aracaju',
        url: 'http://www.frontinaracaju.com.br/',
        when: 'August, 02',
        where: 'Aracaju, SE - Brazil',
        attendees: '≈230',
        presentations: [
          {
            title: 'Tracking.js: Uma nova dimensão',
            url: 'http://www.slideshare.net/zenorocha/trackingjs',
          }
        ],
      },
      {
        title: 'Codelab: Chrome DevTools',
        url: 'http://www.meetup.com/GDG-SP/events/183995162/',
        when: 'May, 28',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈60',
      },
      {
        title: 'Amsterdam Front-End Dev Meetup',
        url: 'http://www.meetup.com/Amsterdam-Front-End-Dev-Meetup/events/176568352/',
        when: 'May, 12',
        where: 'Amsterdam - Netherlands',
        attendees: '≈110',
        presentations: [
          {
            title: 'A future called Web Components',
            url: 'https://speakerdeck.com/zenorocha/a-future-called-web-components',
          }
        ],
      },
      {
        title: 'ScotlandJS',
        url: 'http://lanyrd.com/2014/scotjs2014/',
        when: 'May, 9',
        where: 'Edinburgh - Scotland',
        attendees: '≈160',
        presentations: [
          {
            title: 'A future called Web Components',
            url: 'https://speakerdeck.com/zenorocha/a-future-called-web-components',
            video: 'http://vimeo.com/96477903',
          }
        ],
      },
      {
        title: 'Front Trends',
        url: 'http://lanyrd.com/2014/fronttrends/',
        when: 'May, 7',
        where: 'Warsaw - Poland',
        attendees: '≈480',
        presentations: [
          {
            title: 'A future called Web Components',
            url: 'https://speakerdeck.com/zenorocha/a-future-called-web-components',
            video: 'http://vimeo.com/97308701',
          }
        ],
      },
      {
        title: 'Polymer at SFHTML5',
        url: 'https://www.meetup.com/sfhtml5/events/169452272/',
        when: 'April, 30',
        where: 'San Francisco, CA - USA',
        attendees: '≈700',
        presentations: [
          {
            title: 'Web Components: a chance to create the future',
            url: 'https://speakerdeck.com/zenorocha/web-components-a-chance-to-create-the-future',
            video: 'https://www.youtube.com/watch?v=JUzjr1bIRUg',
          }
        ],
      },
      {
        title: '16º Encontro Locaweb',
        url: 'http://eventos.locaweb.com.br/16o-encontro-locaweb-de-profissionais-de-internet-curitiba/',
        when: 'April, 10',
        where: 'Curitiba, PR - Brazil',
        attendees: '≈250',
        presentations: [
          {
            title:" Como empreender em... você!",
            url: 'http://www.slideshare.net/zenorocha/keynote-30756562',
          }
        ],
      },
      {
        title: 'Coding on Weekend',
        url: 'http://codingonweekend.com.br/',
        when: 'March, 22',
        where: 'Maceió, AL - Brazil',
        attendees: '≈20',
      },
      {
        title: 'JSConf UY',
        url: 'http://lanyrd.com/2014/jsconfuy/',
        when: 'March, 14',
        where: 'Montevideo - Uruguay',
        attendees: '≈350',
        presentations: [
          {
            title: 'A future called Web Components',
            url: 'https://speakerdeck.com/zenorocha/a-future-called-web-components',
            video: 'https://www.youtube.com/watch?v=TKYjzQ0T1q0',
          }
        ],
      },
      {
        title: 'Coding on Weekend',
        url: 'http://codingonweekend.com.br/',
        when: 'February, 22',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈20',
      },
      {
        title: 'Campus Party',
        url: 'http://lanyrd.com/2014/cpbr7/',
        when: 'January, 30',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈150',
        presentations: [
          {
            title:" Como empreender em... você!",
            url: 'http://www.slideshare.net/zenorocha/keynote-30756562',
            video: 'http://www.youtube.com/watch?v=S6APevEo2Yw',
          }
        ],
      },
      {
        title: 'Liferay São Paulo Meetup',
        url: 'http://www.meetup.com/Liferay-Sao-Paulo-User-Group/events/159837172/',
        when: 'January, 30',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈15',
        presentations: [
          {
            title:" Liferay UI (R)evolution",
            url: 'http://www.slideshare.net/zenorocha/liferay-ui-revolution',
          }
        ],
      },
      {
        title: 'Coding on Weekend',
        url: 'http://codingonweekend.com.br/',
        when: 'January, 8',
        where: 'Belo Horizonte, MG - Brazil',
        attendees: '≈20',
      },
    ],
  },
  {
    year: '2013',
    summary: '18 talks and 3 workshops. 12 different cities in 3 different countries.',
    talks: [
      {
        title: 'HTML5 LA',
        url: 'http://lanyrd.com/2013/html5-los-angeles-2/',
        when: 'December, 16',
        where: 'Los Angeles, CA - USA',
        presentations: [
          {
            title: "A future called Web Components",
            url: 'https://speakerdeck.com/zenorocha/a-future-called-web-components',
          }
        ],
      },
      {
        title: 'Liferay Dev Con',
        url: 'http://lanyrd.com/2013/liferay-dev-con/',
        when: 'October, 9',
        where: 'Berlin - Germany',
        presentations: [
          {
            title:" Liferay UI (R)evolution",
            url: 'http://www.slideshare.net/zenorocha/liferay-ui-revolution',
            video: 'http://www.youtube.com/watch?v=uLwISoh0qxQ',
          }
        ],
      },
      {
        title: 'iMasters InterCon',
        url: 'http://lanyrd.com/2013/imasters-intercon-android/',
        when: 'September, 14',
        where: 'São Paulo, SP - Brazil',
        presentations: [
          {
            title: "HTML5 APIs para Mobile",
            url: 'https://speakerdeck.com/zenorocha/html5-apis-para-mobile',
            video: 'http://www.youtube.com/watch?v=ncYj9Z8LwNM',
          }
        ],
      },
      {
        title: 'Coding on Weekend',
        url: 'http://codingonweekend.com.br/',
        when: 'September, 7',
        where: 'Belo Horizonte, MG - Brazil',
        attendees: '≈20',
      },
      {
        title: 'Front in Aracaju',
        url: 'http://lanyrd.com/2013/frontinaracaju/',
        when: 'August, 31',
        where: 'Aracaju, SE - Brazil',
        attendees: '≈240',
        presentations: [
          {
            title: 'O que eu aprendi em 4 anos como dev front-end',
            url: 'http://talks.zenorocha.com/2013/frontinaracaju/',
          }
        ],
      },
      {
        title: 'QCon',
        url: 'http://lanyrd.com/2013/qconsp/',
        when: 'August, 30',
        where: 'São Paulo, SP - Brazil',
        presentations: [
          {
            title: "HTML5 APIs para Mobile",
            url: 'https://speakerdeck.com/zenorocha/html5-apis-para-mobile',
            video: 'http://www.infoq.com/br/presentations/html5-api-mobile',
          }
        ],
      },
      {
        title: 'BrazilJS',
        url: 'http://lanyrd.com/2013/braziljs/',
        when: 'August, 22',
        where: 'Porto Alegre, RS - Brazil',
        attendees: '≈1000',
        presentations: [
          {
            title: "Um futuro chamado Web Components",
            url: 'https://speakerdeck.com/zenorocha/um-futuro-chamado-web-components',
            video: 'http://www.youtube.com/watch?v=7Q0-E_rZ_Cc',
          }
        ],
      },
      {
        title: 'Coding on Weekend',
        url: 'http://codingonweekend.com.br/',
        when: 'August, 17',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈20',
      },
      {
        title: 'Coding on Weekend',
        url: 'http://codingonweekend.com.br/',
        when: 'August, 10',
        where: 'Rio de Janeiro, RJ - Brazil',
        attendees: '≈20',
      },
      {
        title: 'Front in BH',
        url: 'http://frontinbh.com.br/2013',
        when: 'August, 3',
        where: 'Belo Horizonte, MG - Brazil',
        attendees: '≈420',
      },
      {
        title: 'Front in Bahia',
        url: 'http://lanyrd.com/2013/front-in-bahia/',
        when: 'July, 27',
        where: 'Salvador, BA - Brazil',
        presentations: [
          {
            title: 'O que eu aprendi em 4 anos como dev front-end',
            url: 'http://talks.zenorocha.com/2013/frontinbahia/',
          }
        ],
      },
      {
        title: 'WWW 2013',
        url: 'http://www2013.org/',
        when: 'May, 17',
        where: 'Rio de Janeiro, RJ - Brazil',
      },
      {
        title: 'SeCoT',
        url: 'http://lanyrd.com/2013/v-semana-de-computacao-e-tecnologia/',
        when: 'May, 6',
        where: 'Sorocaba, SP - Brazil',
        presentations: [
          {
            title: 'O que eu aprendi em 4 anos como dev front-end',
            url: 'http://talks.zenorocha.com/2013/secot/',
            video: 'https://www.youtube.com/watch?v=qo_k5xppvTI',
          }
        ],
      },
      {
        title: 'Olhó SEO',
        url: 'http://www.olhoseo.com.br/2013/',
        when: 'May, 3',
        where: 'Florianópolis, SC - Brazil',
        presentations: [
          {
            title: "Como Perder Peso (no browser)",
            url: 'https://speakerdeck.com/zenorocha/como-perder-peso-no-browser/',
          }
        ],
      },
      {
        title: 'JAX',
        url: 'http://lanyrd.com/2013/jax/',
        when: 'April, 23',
        where: 'Mainz - Germany',
        presentations: [
          {
            title: 'How to create JavaScript apps for Java portals',
            url: 'https://speakerdeck.com/zenorocha/how-to-create-javascript-apps-for-java-portals',
          },
          {
            title: 'Getting started with YUI3 and AlloyUI',
            url: 'https://speakerdeck.com/zenorocha/getting-started-with-yui3-and-alloyui',
          },
        ],
      },
      {
        title: 'HTML5 Dev Conf',
        url: 'http://lanyrd.com/2013/html5devconf-spring/',
        when: 'April, 01',
        where: 'San Francisco, CA - USA',
        presentations: [
          {
            title: 'Augmented Reality in JavaScript',
            url: 'https://speakerdeck.com/zenorocha/augmented-reality-in-javascript',
          }
        ],
      },
      {
        title: 'File Games Rio',
        url: 'http://www.oifuturo.org.br/evento/file-games-rio-2013/',
        when: 'March, 26',
        where: 'Rio de Janeiro, RJ - Brazil',
      },
      {
        title: 'RioJS',
        url: 'http://lanyrd.com/2013/riojs/',
        when: 'March, 09',
        where: 'Rio de Janeiro, RJ - Brazil',
        presentations: [
          {
            title: 'Como Perder Peso (no browser',
            url: 'https://speakerdeck.com/zenorocha/como-perder-peso-no-browser/',
          }
        ],
      },
      {
        title: 'BeagaJS',
        url: 'http://lanyrd.com/2013/beagajs/',
        when: 'March, 02',
        where: 'Belo Horizonte, MG - Brazil',
      },
      {
        title: 'Liferay LIVE Sessions',
        url: 'http://www.liferay.com/events/web-events',
        when: 'February, 19',
        where: 'Online',
        presentations: [
          {
            title: 'Reintroducing AlloyUI',
            url: 'http://talks.zenorocha.com/2013/alloy-webinar/',
            video: 'http://www.liferay.com/video?title=video-web-event-introducing-alloy-2-0',
          }
        ],
      },
      {
        title: 'Campus Party',
        url: 'http://lanyrd.com/2013/campus-party-brasil/',
        when: 'January, 28',
        where: 'São Paulo, SP - Brazil',
        presentations: [
          {
            title:" Layouts Responsivos",
            url: 'http://www.slideshare.net/bernarddeluna/pdf-apresentacaolayoutsresponsivos',
            video: 'http://www.youtube.com/watch?v=ty7zj37gaBI',
          }
        ],
      },
    ],
  },
  {
    year: '2012',
    summary: '24 talks. 13 different cities in 3 different countries.',
    talks: [
      {
        title: 'Liferay Retreat',
        url: '',
        when: 'December, 10',
        where: 'Los Angeles, CA - USA',
        presentations: [
          {
            title: 'Alloy UI: Past, Present & Future',
            url: 'http://talks.zenorocha.com/2012/new-alloy-website/',
          }
        ],
      },
      {
        title: 'DevFest Brasil',
        url: 'http://www.devfest.com.br/',
        when: 'November, 30',
        where: 'São Paulo, SP - Brazil',
        presentations: [
          {
            title: 'Realidade aumentada com JavaScript',
            url: 'http://talks.zenorocha.com/2012/devfest',
            video: 'http://www.infoq.com/br/presentations/realidade-aumentada-html5',
          }
        ],
      },
      {
        title: 'Conexão Kinghost',
        url: 'http://www.conexaokinghost.com.br/',
        when: 'November, 29',
        where: 'Porto Alegre, RS - Brazil',
        attendees: '≈240',
        presentations: [
          {
            title:" Surpresa!",
            url: 'http://www.slideshare.net/bernarddeluna/surpresa-15160517',
            video: 'http://www.youtube.com/watch?v=66RjQmQg30Y',
          }
        ],
      },
      {
        title: 'Ideais Cowabunga',
        url: 'http://ideais-cowabunga.eventbrite.com/',
        when: 'November, 13',
        where: 'Rio de Janeiro, RJ - Brazil',
        attendees: '≈20',
        presentations: [
          {
            title: 'Como usar HTML5 sem uma máquina do tempo',
            url: 'http://talks.zenorocha.com/2012/ideais',
          }
        ],
      },
      {
        title: 'IV ETS - Encontro de Tecnologia Simonsen',
        url: 'http://www.simonsen.br/ets/base.php?inscricao=programacao',
        attendees: '≈180',
        when: 'November, 10',
        where: 'Rio de Janeiro, RJ - Brazil',
        presentations: [
          {
            title: 'Realidade aumentada com JavaScript',
            url: 'http://talks.zenorocha.com/2012/simonsen/',
          }
        ],
      },
      {
        title: 'Front in Sampa',
        url: 'http://lanyrd.com/2012/frontinsampa/',
        when: 'November, 03',
        where: 'São Paulo, SP - Brazil',
        presentations: [
          {
            title:" Surpresa!",
            url: 'http://www.slideshare.net/bernarddeluna/surpresa-15160517',
            video: 'http://www.youtube.com/watch?v=SOgriWRiefs',
          }
        ],
      },
      {
        title: 'Front in Maceió',
        url: 'http://lanyrd.com/2012/frontinmaceio/',
        when: 'October, 27',
        where: 'Maceió, AL - Brazil',
        attendees: '≈220',
        presentations: [
          {
            title: 'O que eu aprendi em 3 anos como dev front-end',
            url: 'http://talks.zenorocha.com/2012/frontinmaceio/',
          }
        ],
      },
      {
        title: 'W3C Conference - Web.br 2012',
        url: 'http://lanyrd.com/2012/webbr2012/',
        when: 'October, 18-20',
        where: 'São Paulo, SP - Brazil',
        presentations: [
          {
            title: 'Realidade aumentada com JavaScript',
            url: 'http://talks.zenorocha.com/2012/w3c/',
          }
        ],
      },
      {
        title: 'RCuritiba',
        url: 'http://rcuritiba.com.br/',
        when: 'October, 12-15',
        where: 'Curitiba, PR - Brazil',
        presentations: [
          {
            title: 'Arte digital na web: onde começar?',
            url: 'http://talks.zenorocha.com/2012/rcuritiba/',
            video: 'http://www.youtube.com/watch?v=V8QZMO8rr8g',
          }
        ],
      },
      {
        title: 'Front in Maringá',
        url: 'http://lanyrd.com/2012/frontinmaringa/',
        when: 'October, 06',
        where: 'Maringá, PR - Brazil',
        presentations: [
          {
            title: 'O que eu aprendi em 3 anos como dev front-end',
            url: 'http://talks.zenorocha.com/2012/frontinmaringa/',
          }
        ],
      },
      {
        title: 'II SouWebPel',
        url: 'http://souwebpel.com.br/',
        when: 'September, 29',
        where: 'Pelotas, RS - Brazil',
        presentations: [
          {
            title: 'Como fugir do feijão com arroz usando Canvas, SVG e WebGL',
            url: 'http://talks.zenorocha.com/2012/souwebpel/',
          }
        ],
      },
      {
        title: 'BrazilJS',
        url: 'http://braziljs.com.br/',
        when: 'August, 30',
        where: 'Porto Alegre, RS - Brazil',
        attendees: '≈1000',
        presentations: [
          {
            title: 'Como não virar um Zumbi: Kit de sobrevivência',
            url: 'http://talks.zenorocha.com/2012/braziljs/',
          }
        ],
      },
      {
        title: 'Tableless Conference',
        url: 'http://tableless.com.br/tablelessconf/',
        when: 'August, 24',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈170',
        presentations: [
          {
            title: 'Canvas, SVG e WebGL',
            url: 'http://talks.zenorocha.com/2012/tablelessconf/',
          }
        ],
      },
      {
        title: 'TDC - The Developers Conference',
        url: 'http://www.thedevelopersconference.com.br/#florianopolis',
        when: 'August, 25',
        where: 'Florianópolis, SC - Brazil',
        presentations: [
          {
            title: 'Mitos do Front-end',
            url: 'http://talks.zenorocha.com/2012/tdc-sc/',
          }
        ],
      },
      {
        title: 'Front in Porto Alegre',
        url: 'http://abradirs.com.br/frontinpoa/',
        when: 'August, 18',
        where: 'Porto Alegre, RS - Brazil',
        presentations: [
          {
            title: 'CSS Sucks!',
            url: 'http://talks.zenorocha.com/2012/frontinpoa/',
          }
        ],
      },
      {
        title: 'QCon',
        url: 'http://qconsp.com/',
        when: 'August, 04',
        where: 'São Paulo, SP - Brazil',
        presentations: [
          {
            title: 'Mitos do Front-end',
            url: 'http://talks.zenorocha.com/2012/qconsp/',
            video: 'http://www.infoq.com/br/presentations/mitos-desenvolvimento-frontend',
          }
        ],
      },
      {
        title: 'FISL',
        url: 'http://softwarelivre.org/fisl13/',
        when: 'July, 25',
        where: 'Porto Alegre, RS - Brazil',
        presentations: [
          {
            title: 'Como fugir do feijão com arroz usando Canvas, SVG e WebGL',
            url: 'http://talks.zenorocha.com/2012/fisl/',
            video: 'http://www.youtube.com/watch?v=ukjHPwg74ik',
          }
        ],
      },
      {
        title: 'Front in BH',
        url: 'http://frontinbh.com.br/2012',
        when: 'July, 14',
        where: 'Belo Horizonte, MG - Brazil',
        attendees: '≈360',
        presentations: [
          {
            title: 'CSS Sucks!',
            url: 'http://talks.zenorocha.com/2012/frontinbh/',
            video: 'https://www.youtube.com/watch?v=E7FQCHBicO0',
          }
        ],
      },
      {
        title: 'TDC - The Developers Conference',
        url: 'http://www.thedevelopersconference.com.br/#saopaulo',
        when: 'July, 04',
        where: 'São Paulo, SP - Brazil',
        presentations: [
          {
            title: 'Como usar HTML5 sem uma máquina do tempo',
            url: 'http://talks.zenorocha.com/2012/tdc-sp/',
          }
        ],
      },
      {
        title: 'Front in Curitiba',
        url: 'http://www.frontincuritiba.com.br/',
        when: 'June, 23',
        where: 'Curitiba, PR - Brazil',
        presentations: [
          {
            title: 'Como usar HTML5 sem uma máquina do tempo',
            url: 'http://talks.zenorocha.com/2012/frontincuritiba/',
          }
        ],
      },
      {
        title: 'Front in Rio',
        url: 'http://frontinrio.com.br',
        when: 'June, 02',
        where: 'Rio de Janeiro, RJ - Brazil',
        attendees: '≈200',
        presentations: [
          {
            title: 'CSS Sucks!',
            url: 'http://talks.zenorocha.com/2012/frontinrio/',
          }
        ],
      },
      {
        title: 'JSConf Argentina',
        url: 'http://lanyrd.com/2012/jsconf-argentina/',
        when: 'May, 19',
        where: 'Buenos Aires - Argentina',
        presentations: [
          {
            title: 'How to use Canvas, SVG and WebGL without a time machine',
            url: 'http://talks.zenorocha.com/2012/jsconf/',
            video: 'http://blip.tv/jsconfar/zeno_rocha-6279969',
          }
        ],
      },
      {
        title: 'PernambucoJS',
        url: 'http://lanyrd.com/2012/pernambucojs/',
        when: 'April, 21',
        where: 'Recife, PE - Brazil',
        attendees: '≈220',
        presentations: [
          {
            title: 'Como fugir do feijão com arroz usando Canvas, SVG e WebGL',
            url: 'http://talks.zenorocha.com/2012/pernambucojs/',
          }
        ],
      },
      {
        title: 'BeagaJS',
        url: 'http://lanyrd.com/2012/beagajs/',
        when: 'January, 21',
        where: 'Belo Horizonte, MG - Brazil',
        attendees: '≈130',
        presentations: [
          {
            title: 'Como usar HTML5 sem uma máquina do tempo',
            url: 'http://talks.zenorocha.com/2012/beagajs/',
          }
        ],
      },
    ],
  },
  {
    year: '2011',
    summary: '4 talks. 1 country in 4 different cities.',
    talks: [
      {
        title: 'Sampa.JS',
        url: 'http://lanyrd.com/2011/sampajs/',
        when: 'November, 19',
        where: 'São Paulo, SP - Brazil',
        attendees: '≈40',
        presentations: [
          {
            title:" Como usar HTML5 sem uma máquina do tempo",
            url: 'http://www.slideshare.net/zenorocha/desbravando-o-html5-boilerplate',
            video: 'https://www.youtube.com/watch?v=7u4Rcc955fU',
          }
        ],
      },
      {
        title: 'Front in Rio',
        url: 'http://frontinrio.com.br',
        when: 'June, 18',
        where: 'Rio de Janeiro, RJ - Brazil',
        attendees: '≈140',
        presentations: [
          {
            title:" Desbravando o HTML5 Boilerplate",
            url: 'http://www.slideshare.net/zenorocha/desbravando-o-html5-boilerplate',
          }
        ],
      },
      {
        title: 'FSLDC',
        url: 'http://forumsoftwarelivre.com.br/2011/',
        when: 'June, 4',
        where: 'Duque de Caxias, RJ - Brazil',
        attendees: '≈150',
        presentations: [
          {
            title:" HTML5",
            url: 'http://www.slideshare.net/zenorocha/html-5-5273640',
          }
        ],
      },
      {
        title: '13º Encontro Locaweb',
        url: 'http://forumsoftwarelivre.com.br/2011/',
        when: 'June, 4',
        where: 'Rio de Janeiro, RJ - Brazil',
        attendees: '≈50',
        presentations: [
          {
            title:" Criando projetos robustos com HTML5",
            url: 'http://www.slideshare.net/zenorocha/construindo-projetos-robustos-em-html5',
          }
        ],
      },
    ],
  },
  {
    year: '2010',
    summary: 'And suddenly I started to give presentations...',
    talks: [
      {
        title: 'V Convescote Caos!',
        when: 'August, 10',
        where: 'Rio de Janeiro, RJ - Brazil',
        attendees: '≈15',
        presentations: [
          {
            title:" Wordpress",
            url: 'http://www.slideshare.net/zenorocha/wordpress-4948450',
          }
        ],
      },
    ],
  }
]

export default items