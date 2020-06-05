import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import '../style.css'

const API = 'https://content.gex.ge/index.php?rest_route=/getGeneralData/get';
const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default class MyApp extends App {
  static async getInitialProps() {
    const res = await fetch(API);
    const json = await res.json();
    return { pageProps: json };
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}