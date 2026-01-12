import { Box } from '../components/Box';
import Navbar from '../components/Navbar';
import { PostMain } from '../components/Post';
import { PostContainer } from '../components/Post';
import ShortcutError from '../components/ShortcutError';
import { Wrapper } from '../components/Wrapper';

export default function ErrorBoundary() {
  return (
    <Wrapper>
      <Navbar />
      <PostMain>
        <PostContainer>
          <Box className="text-center">
            <h1>five hundred</h1>
            <ShortcutError />
            <p>Something isn&apos;t right.</p>
          </Box>
        </PostContainer>
      </PostMain>
    </Wrapper>
  );
}
