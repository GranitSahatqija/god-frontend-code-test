import React from 'react'
import { StyleProvider, ThemePicker } from 'vcc-ui';
import "../public/css/styles.css";
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
        <StyleProvider>
            <ThemePicker variant="light">
                <Component {...pageProps} />
            </ThemePicker>
        </StyleProvider>
    </React.StrictMode>
  )
}
