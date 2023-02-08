import '@/styles/globals.css'
import UserContext, { UserProvider} from '../contexts/userContext'
import NavBar from '@/components/NavBar'


export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <NavBar />
      <Component {...pageProps} />
    </UserProvider>
  )
}
