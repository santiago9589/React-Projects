import type { AppProps } from "next/app";
import Head from "next/head";
import ContextProvider from "../context/ContextProvider";

import "../css/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Basement Supply</title>
        <meta content="Coding challenge for basement.studio." name="description" />
      </Head>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
}
export default App;
