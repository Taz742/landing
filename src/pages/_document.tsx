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
          <link href="/css/fonts.css" rel="stylesheet" />
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
          ></script> */}
          <script
            src="https://my.rtmark.net/p.js?f=sync&lr=1&partner=01a4c800479727b6a617fc6209de7e7042d4df6c0f7a466a457cb3ca875e91d2"
            defer
          ></script>
          <noscript>
            <img
              src="https://my.rtmark.net/img.gif?f=sync&lr=1&partner=01a4c800479727b6a617fc6209de7e7042d4df6c0f7a466a457cb3ca875e91d2"
              width="1"
              height="1"
            />
          </noscript>
          <script type="text/javascript" src="https://propeller-tracking.com/fv.js?t=82125"></script>

          <Main />
          <div id="modal" />
          <NextScript />
        </body>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: "(function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement('script');r.src=o;r.async=true;i=t.getElementsByTagName('script')[0];i.parentNode.insertBefore(r,i)})(window,document,'https://diffuser-cdn.app-us1.com/diffuser/diffuser.js','vgo');vgo('setAccount', '476500667');vgo('setTrackByDefault', true);vgo('process');"}} />
      </Html>
    );
  }
}
