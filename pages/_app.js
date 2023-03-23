import { darkTheme } from '../themes';
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
