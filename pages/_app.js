import '../styles/globals.css'
import FirstProvider from './../context/FirstContext'
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <FirstProvider>
        <ThemeProvider attribute='class'>
          <Component {...pageProps}  />
        </ThemeProvider>
      </FirstProvider>
    </>
  )
}

export default MyApp
