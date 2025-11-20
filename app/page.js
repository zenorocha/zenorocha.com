import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PostContainer, PostContent, PostMain } from "../components/Post";
import ShortcutHome from "../components/ShortcutHome";
import { Wrapper } from "../components/Wrapper";
import { getPersonJsonLd } from "../lib/json-ld";
import { styled } from "../stitches.config";

export const metadata = {
  title: "Zeno Rocha",
  description: "Obsessed with developer experience",
  openGraph: {
    title: "Zeno Rocha",
    description: "Obsessed with developer experience",
    url: "https://zenorocha.com",
    images: ["/static/images/home-bw.jpg"]
  }
};

export default function Index() {
  const title = "Zeno Rocha";
  const description = "Obsessed with developer experience";

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
      <Home>
        <PostContent>
          <PostContainer>
            <div>
              <h1>{title}</h1>
              <p>
                <strong>
                  Founder & CEO at{" "}
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
      </Home>
      <Footer />
    </Wrapper>
  );
}

const Home = styled(PostMain, {
  alignItems: "center",
  display: "flex",
  margin: "0 auto",
  "@bp2": { width: 800 }
});
