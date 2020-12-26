import { useEffect } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import AppThemeProvider from "../src/theme/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import "../src/styles/global.css";

export default function App(props: AppProps): Record<string, unknown> {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Mayank_Sh07</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <AppThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </AppThemeProvider>
    </>
  );
}
