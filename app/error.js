"use client";

import ErrorMessage from "../components/ErrorMessage";
import Blogpost from "../layouts/Blogpost";

export default function ErrorBoundary() {
  return (
    <Blogpost title="" image={null} date={null}>
      <ErrorMessage />
    </Blogpost>
  );
}
