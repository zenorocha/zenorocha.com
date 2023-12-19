import { styled } from '../stitches.config'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShortcutHome from '../components/ShortcutHome'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'

export async function getStaticProps() {
  return {
    props: {
      title: 'Zeno Rocha',
      description: 'Obsessed with developer experience',
      image: '/static/images/home-bw.jpg',
    },
  }
}

export default function Index(props) {
  const { title, description, image } = props

  const getPersonJsonLd = () => {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "Person",
        "url": "https://zenorocha.com/",
        "affiliation": [
          {
            "@type": "Organization",
            "@id": "https://www.wikidata.org/wiki/Q123921042",
            "url": "https://resend.com/",
            "name": "Resend"
          },
          {
            "@type": "Organization",
            "@id": "https://www.wikidata.org/wiki/Q2616400",
            "url": "https://www.ycombinator.com/",
            "name": "Y Combinator"
          }
        ],
        "description": "Zeno Rocha is a Brazilian software entrepreneur who is the founder and CEO of Resend. Before founding Resend, Zeno was a VP of Developer Experience at WorkOS.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/90/Zeno_Rocha.png",
        "name": "Zeno Rocha",
        "givenName": "Zeno",
        "familyName": "Rocha",
        "gender": "Male",
        "birthPlace": "Curitiba",
        "jobTitle": "Founder and CEO",
        "sameAs": [
          "https://www.wikidata.org/wiki/Q123921198",
          "https://www.linkedin.com/in/zenorocha",
          "https://twitter.com/zenorocha",
          "https://www.crunchbase.com/person/zeno-rocha",
          "https://www.reddit.com/user/zenorocha",
          "https://www.instagram.com/zenorocha",
          "https://github.com/zenorocha"
        ],
        "knowsAbout": [
          {
            "@type": "Organization",
            "@id": "https://www.wikidata.org/wiki/Q123921042",
            "name": "Resend"
          },
          {
            "@type": "Thing",
            "@id": "https://www.wikidata.org/wiki/Q80993",
            "name": "Software Engineering"
          },
          {
            "@type": "Thing",
            "@id": "https://www.wikidata.org/wiki/Q1254596",
            "name": "Software as a Service"
          },
          {
            "@type": "Organization",
            "@id": "https://www.wikidata.org/wiki/Q2616400",
            "name": "Y Combinator"
          }
        ],
        "knowsLanguage": [
          {
            "@type": "Language",
            "@id": "https://www.wikidata.org/wiki/Q750553",
            "name": "Brazilian Portuguese"
          },
          {
            "@type": "Language",
            "@id": "https://www.wikidata.org/wiki/Q1860",
            "name": "English"
          }
        ],
        "nationality": [
          {
            "@type": "Country",
            "@id": "https://www.wikidata.org/wiki/Q155",
            "name": "Brazil"
          },
          {
            "@type": "Country",
            "@id": "https://www.wikidata.org/wiki/Q30",
            "name": "United States of America"
          }
        ],
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "@id": "https://www.wikidata.org/wiki/Q2616400",
            "name": "Y Combinator",
            "url": "https://www.ycombinator.com/",
            "startDate": "2023",
            "endDate": "2023"
          },
          {
            "@type": "EducationalOrganization",
            "@id": "https://www.wikidata.org/wiki/Q3011938",
            "name": "Federal University of the State of Rio de Janeiro",
            "url": "https://www.unirio.br/",
            "startDate": "2009",
            "endDate": "2013",
            "major": [
              {
                "@type": "DefinedTerm",
                "name": "Information Systems"
              }
            ]
          }
        ]
      }`,
    };
  }

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://zenorocha.com" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getPersonJsonLd()}
          key="person-jsonld"
        />
      </Head>

      <Navbar />
      <Home>
        <PostContent>
          <PostContainer>
            <div>
              <h1>{title}</h1>
              <p>
                <strong>Founder & CEO at{' '}
                  <a href="https://resend.com" target="blank">Resend</a>
                </strong><br />
                {description}
              </p>
              <ShortcutHome />
            </div>
          </PostContainer>
        </PostContent>
      </Home>
      <Footer />
    </Wrapper>
  )
}

const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})
