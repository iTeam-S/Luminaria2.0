import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Luminaria',
  description: 'Luminaria is a non-profit organization that aims to provide a better future for the children of the world.',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="fr">
        <body className={inter.className}>
          {children}
          <script src="https://kit.fontawesome.com/c5dfbd6cce.js" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
        </body>
      </html>
    </>
  )
}
