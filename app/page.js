import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { PostContainer, PostContent, PostMain } from '../components/Post';
import ShortcutHome from '../components/ShortcutHome';
import { Wrapper } from '../components/Wrapper';
import { getPersonJsonLd } from '../lib/json-ld';

export const metadata = {
  title: 'Zeno Rocha',
  description: 'Obsessed with developer experience',
  openGraph: {
    title: 'Zeno Rocha',
    description: 'Obsessed with developer experience',
    url: 'https://zenorocha.com',
    images: ['/static/images/home-bw.jpg']
  }
};

export default function Index() {
  const title = 'Zeno Rocha';
  const description = 'Obsessed with developer experience';

  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPersonJsonLd())
        }}
        key="person-jsonld"
      />
      <Navbar />
      <PostMain className="mx-auto flex items-center md:w-200">
        <PostContent>
          <PostContainer>
            <div>
              <h1>{title}</h1>
              <p>
                <strong>
                  Founder & CEO at{' '}
                  <a href="https://resend.com" target="blank">
                    Resend
                  </a>
                </strong>
                <br />
                {description}
              </p>
              <ShortcutHome />
            </div>
          </PostContainer>
        </PostContent>
      </PostMain>
      <Footer />
    </Wrapper>
  );
}
