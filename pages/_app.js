import '@/styles/globals.css'
import { ThemeProvider } from '../Context/ThemeContext'
import { FontProvider } from '@/Context/FontContext';


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <FontProvider>
      <Component {...pageProps} />
      </FontProvider>
    </ThemeProvider>
  );
}
