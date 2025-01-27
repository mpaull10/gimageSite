import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Gimage</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        {/* <link rel="stylesheet" href="../global.css" /> */}
        <link rel="shortcut icon" href="/favicon.svg"></link>
        <meta property="og:title" content="Gimage" />
        <meta property="og:description" content="A fitness focused social media app to promote an active lifestyle, exchange ideas, and stay accountable." />
        <meta property="og:image" content="https://www.gimageco.com/assets/LogoOrange.png" />
        <meta property="og:url" content="https://gimageco.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
