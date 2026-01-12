import BlogDate from '../components/BlogDate';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Post, PostContainer, PostContent, PostMain } from '../components/Post';
import { Wrapper } from '../components/Wrapper';

export default function Blogpost({ children, title, image, date }) {
  return (
    <Wrapper>
      <Navbar image={image} />
      {image ? (
        <Post>
          <div className="relative -z-1 flex h-screen min-h-150 w-full flex-col items-center justify-center bg-[#141618]">
            <h1 className="relative z-3 mx-auto mt-14.75 px-3 text-center text-4xl leading-12 text-white md:max-w-[60%] md:text-[3.75rem] md:leading-20">
              {title}
            </h1>
            <div
              className="fixed top-0 left-0 z-1 h-full w-full bg-[#141618] bg-cover bg-center bg-no-repeat opacity-40 will-change-transform after:absolute after:top-0 after:left-0 after:z-2 after:h-full after:w-full after:bg-linear-to-b after:from-[rgba(0,0,0,0.8)] after:via-transparent after:via-90% after:to-[rgba(0,0,0,0.8)] after:will-change-transform after:content-[''] max-lg:absolute"
              style={image ? { backgroundImage: `url(${image})` } : {}}
            />
            <h2 className="absolute bottom-5 z-2 m-0 w-full text-center text-base font-medium text-white">
              <BlogDate dateString={date} />
            </h2>
          </div>
          <PostContent className="[&_::selection]:[-webkit-text-fill-color:black]] [&_::selection]:bg-[#ff80bf] [&_::selection]:text-black">
            <PostContainer>{children}</PostContainer>
          </PostContent>
        </Post>
      ) : (
        <PostMain>
          <PostContent className="[&_::selection]:[-webkit-text-fill-color:black]] [&_::selection]:bg-[#ff80bf] [&_::selection]:text-black">
            <PostContainer>
              <div>
                <h1 className="text-primary mx-auto mb-0 max-w-none text-center text-5xl leading-15">
                  {title}
                </h1>
                <h2 className="text-secondary m-0 mb-15 text-center text-base">
                  <BlogDate dateString={date} />
                </h2>
              </div>
              {children}
            </PostContainer>
          </PostContent>
        </PostMain>
      )}
      <Footer />
    </Wrapper>
  );
}
