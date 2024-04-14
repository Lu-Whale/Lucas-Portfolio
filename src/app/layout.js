import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import icon from '../../public/favicon.ico';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jingyu (Lucas) Lu',
  description: 'This is my personal portfolio'
}

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel='icon' href={icon} type='image/x-icon' />
      </Head>
      <html lang='en'>
      <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}
