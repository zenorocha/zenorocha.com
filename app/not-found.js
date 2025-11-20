import ErrorMessage from "../components/ErrorMessage";
import Blogpost from "../layouts/Blogpost";

export default function NotFound() {
  return (
    <Blogpost title="" image={null} date={null}>
      <ErrorMessage code={404} />
    </Blogpost>
  );
}
