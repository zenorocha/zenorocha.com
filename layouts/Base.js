import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { PostContainer, PostContent, PostMain } from '../components/Post';
import { Wrapper } from '../components/Wrapper';

export default function Base({
  children,
  title,
  tagline,
  primaryColor,
  secondaryColor
}) {
  const colorMap = {
    yellow: '#ffff80',
    pink: '#ff80bf',
    purple: '#9580ff',
    red: '#ff9580',
    orange: '#ffca80',
    green: '#8aff80',
    cyan: '#80ffea'
  };

  const primaryColorValue = colorMap[primaryColor] || colorMap.cyan;
  const secondaryColorValue = colorMap[secondaryColor] || colorMap.green;

  return (
    <Wrapper>
      <Navbar />
      <style>{`
        .base-post-main ::selection {
          background: ${primaryColorValue};
          color: #000;
          -webkit-text-fill-color: #000;
        }
      `}</style>
      <PostMain className="base-post-main">
        <PostContent>
          <PostContainer>
            <h1
              className="bg-size-[100%] bg-clip-text [-moz-background-clip:text] [-moz-text-fill-color:transparent] [-webkit-background-clip:text] [-webkit-box-decoration-break:clone] [-webkit-text-fill-color:transparent]"
              style={{
                backgroundImage: `linear-gradient(135deg, ${primaryColorValue} 0%, ${secondaryColorValue} 100%)`
              }}
            >
              {tagline ? tagline : title}
            </h1>
            {children}
          </PostContainer>
        </PostContent>
      </PostMain>
      <Footer />
    </Wrapper>
  );
}
