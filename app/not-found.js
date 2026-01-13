import { Box } from '../components/Box';
import Navbar from '../components/Navbar';
import { PostMain } from '../components/Post';
import { PostContainer } from '../components/Post';
import ShortcutError from '../components/ShortcutError';
import { Wrapper } from '../components/Wrapper';

export default function NotFound() {
  return (
    <Wrapper>
      <Navbar />
      <PostMain>
        <PostContainer>
          <Box className="text-center">
            <h1>four oh four</h1>
            <ShortcutError />
            <p>This page doesn&apos;t exist.</p>
          </Box>
        </PostContainer>
      </PostMain>
    </Wrapper>
  );
}
