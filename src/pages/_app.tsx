import "../styles/index.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cep Search</title>
        <link rel="shortcut icon" href="../..//logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
