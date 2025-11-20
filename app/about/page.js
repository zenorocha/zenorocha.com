import Base from "../../layouts/Base";
import AboutClient from "./AboutClient";

export const metadata = {
  title: "About",
  description:
    "Zeno Rocha is a Brazilian creator and programmer. He currently lives in San Francisco, California, where he's the Founder & CEO at Resend. His lifelong appreciation for building software and sharing knowledge led him to speak in over 110 conferences worldwide. His passion for open source put him on the top 20 most active users on GitHub at age 22. Before moving to the US, Zeno developed multiple applications, mentored startups, and worked at major companies in Latin America, such as Globo and Petrobras.",
  openGraph: {
    title: "About // Zeno Rocha",
    description:
      "Zeno Rocha is a Brazilian creator and programmer. He currently lives in San Francisco, California, where he's the Founder & CEO at Resend.",
    url: "https://zenorocha.com/about",
    images: ["/static/images/about-bw.jpg"]
  }
};

export default function About() {
  const description =
    "Zeno Rocha is a Brazilian creator and programmer. He currently lives in San Francisco, California, where he's the Founder & CEO at Resend. His lifelong appreciation for building software and sharing knowledge led him to speak in over 110 conferences worldwide. His passion for open source put him on the top 20 most active users on GitHub at age 22. Before moving to the US, Zeno developed multiple applications, mentored startups, and worked at major companies in Latin America, such as Globo and Petrobras.";

  return (
    <Base
      title="About // Zeno Rocha"
      tagline="Create. Share. Repeat."
      primaryColor="pink"
      secondaryColor="purple"
    >
      <AboutClient description={description} />
    </Base>
  );
}
