import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Title from '../components/Title'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className='grid grid-rows-3x grid-cols-4x h-screen w-screen p-2'>
      <Title  title='WELCOME TO FAKETRAVELS' />
      <Component {...pageProps} />
      <Footer  footer='Todos los derechos reservados'/>
    </main>
  )
}

export default MyApp
