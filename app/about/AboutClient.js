"use client";

import { format, intervalToDuration, parseISO } from "date-fns";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

import { ButtonPrimary } from "../../components/ButtonPrimary";
import Pronunciation from "../../components/Pronunciation";
import Toast from "../../components/Toast";
import items from "../../data/about";
import copyBioIcon from "../../public/static/icons/copy-bio.json";
import downloadIcon from "../../public/static/icons/download.json";
import { styled } from "../../stitches.config";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function AboutClient({ description }) {
  const [toastTitle, setToastTitle] = React.useState("");
  const [toastDescription, setToastDescription] = React.useState("");
  const [showToast, setShowToast] = React.useState(false);
  const copyBioRef = React.useRef();
  const downloadRef = React.useRef();

  const renderIntro = () => {
    return (
      <Container>
        <Section
          css={{
            width: "336px"
          }}
        >
          <Image
            alt="Zeno"
            src="/static/images/avatar.jpg"
            width="336"
            height="336"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </Section>
        <Section>
          <Paragraph
            css={{
              marginTop: "16px",
              "@bp2": { marginTop: "-6px" }
            }}
          >
            <strong>Hey, I&apos;m Zeno Rocha</strong>
            <Pronunciation />I started as a software engineer back in 2009,
            working with Flash.
          </Paragraph>
          <Paragraph>
            I&apos;m the <strong>Founder & CEO</strong> at Resend. Before that,
            I was a VP of Developer Experience at WorkOS and CPO at Liferay
            Cloud. I&apos;m originally from Brazil and now living in{" "}
            <strong>San Francisco, California</strong> with my amazing wife and
            beautiful daughter.
          </Paragraph>
          <Paragraph>
            <strong>I love dark mode</strong>, open source, and side projects.
            When I&apos;m not working, I like running, watching movies, and{" "}
            <strong>eating cheese</strong>.
          </Paragraph>
        </Section>
      </Container>
    );
  };

  const renderBio = () => {
    const btnStyle = {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center"
    };
    const iconStyle = { width: 24, height: 24, marginRight: 8 };

    return (
      <div>
        <p>
          This is made for journalists, podcast hosts, and event organizers to
          copy-and-paste.
        </p>
        <blockquote>
          <p>{description}</p>
        </blockquote>
        <ButtonsContainer>
          <ButtonPrimary
            as="button"
            style={btnStyle}
            onClick={copyBio}
            onMouseEnter={() => copyBioRef.current?.play()}
            onMouseLeave={() => copyBioRef.current?.stop()}
          >
            <Lottie
              lottieRef={copyBioRef}
              style={iconStyle}
              animationData={copyBioIcon}
              loop={false}
              autoplay={false}
            />
            Copy Bio
          </ButtonPrimary>
          <span style={{ margin: "0 20px 0 10px" }}>•</span>
          <ButtonPrimary
            as="a"
            download
            role="button"
            href="/static/images/avatar.jpg"
            style={btnStyle}
            onClick={downloadHeadshot}
            onMouseEnter={() => downloadRef.current?.play()}
            onMouseLeave={() => downloadRef.current?.stop()}
          >
            <Lottie
              lottieRef={downloadRef}
              style={iconStyle}
              animationData={downloadIcon}
              loop={false}
              autoplay={false}
            />
            Download Headshot
          </ButtonPrimary>
        </ButtonsContainer>
      </div>
    );
  };

  const renderAll = () => {
    return items.map((item) => {
      return (
        <div
          style={{ marginBottom: 40 }}
          key={`${item.companyUrl}-${item.startDate}`}
        >
          <h3>{item.jobTitle}</h3>
          <p style={{ margin: 0 }}>
            <a href={item.companyUrl} target="_blank">
              {item.company}
            </a>
            <span> • {item.location}</span>
          </p>
          <p style={{ margin: 0 }}>
            <span>{format(parseISO(item.startDate), "LLL yyyy")}</span>
            <span> – </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), "LLL yyyy")
                : "Present"}
            </span>
            <span> • </span>
            <span>{getDuration(item.startDate, item.endDate)}</span>
          </p>
        </div>
      );
    });
  };

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date()
    });

    let durationStr = "";

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `;
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `;
    }

    durationStr += `${durationObj.months} mos`;

    return durationStr;
  };

  const downloadHeadshot = () => {
    setToastTitle("Downloading...");
    setToastDescription("You can now add this photo to your fancy site.");
    setShowToast(true);
  };

  const copyBio = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(description);

    setToastTitle("Copied :D");
    setToastDescription("You can now paste it anywhere.");
    setShowToast(true);
  };

  return (
    <>
      {renderIntro()}
      <h2>Bio</h2>
      {renderBio()}
      <h2>Career</h2>
      {renderAll()}
      <Toast
        title={toastTitle}
        description={toastDescription}
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  );
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@bp2": { flexDirection: "row" }
});

const Paragraph = styled("p", {
  "@bp2": { margin: "15px 0" }
});

const ButtonsContainer = styled("div", {
  display: "flex",
  alignItems: "center"
});

const Section = styled("div", {
  marginTop: "0px",
  width: "auto",
  "@bp2": { width: "48%" }
});
