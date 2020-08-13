import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => sheet.collectStyles(materialSheets.collect(<App {...props} />))
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
          {materialSheets.getStyleElement()}
        </>
      )
    };
  }

  public render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="//cdn.web-fonts.ge/fonts/bpg-nino-mtavruli/css/bpg-nino-mtavruli.min.css" />
          <link rel="stylesheet" href="//cdn.web-fonts.ge/fonts/bpg-mrgvlovani-caps/css/bpg-mrgvlovani-caps.min.css" />
        </Head>
        <body>
          {/* <div id="fb-root"></div>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.fbAsyncInit = function() {
                  FB.init({
                    xfbml            : true,
                    version          : 'v8.0'
                  });
                };
                (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));`
            }}
          ></script>

          <div
            className="fb-customerchat"
            // @ts-ignore
            attribution="setup_tool"
            page_id="107413211066997"
            theme_color="#0ecbfd"
            logged_in_greeting="მოგესალმებით! რით შეგვიძლია დაგეხმაროთ?"
            logged_out_greeting="მოგესალმებით! რით შეგვიძლია დაგეხმაროთ?"
          ></div> */}
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
