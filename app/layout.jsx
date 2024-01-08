import { Outfit } from 'next/font/google'
import './globals.css'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {ThemeProvider} from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Gauthier Montagne',
  description: 'Mon portfolio avec NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={outfit.className}>
          <ThemeProvider attribute={"class"} defaultTheme={"light"}>
              <Header />
              {children}
              <Footer />
          </ThemeProvider>
      </body>
    </html>
  )
}
