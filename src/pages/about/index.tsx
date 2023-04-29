import { NextPage } from "next";
import Head from "next/head";

import { AboutView } from "@views/about/view";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About me |  </title>
        <meta name="description" content="The story behind why I write" />
        <meta property="og:title" content="About me -  " />
        <meta
          property="og:description"
          content="The story behind why I write"
        />
        <meta property="og:url" content="https://.dev/about" />
        <meta property="og:type" content="website" />
      </Head>
      <AboutView />
    </>
  );
};

export default About;
