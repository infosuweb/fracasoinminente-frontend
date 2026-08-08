import Hero from './components/Hero'
import ListenPlayer from './components/ListenPlayer'
import MusicLinks from './components/MusicLinks'
import Releases from './components/Releases'
import Press from './components/Press'
import Footer from './components/Footer'
import SmartLinks from './components/SmartLinks'

function isSmartLinkPath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  return path === '/links' || path === '/rain'
}

export default function App() {
  if (typeof window !== 'undefined' && isSmartLinkPath(window.location.pathname)) {
    return <SmartLinks />
  }

  return (
    <div className="min-h-svh">
      <Hero />
      <div className="zone-dark">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ListenPlayer />
          <MusicLinks />
          <Releases />
          <Press />
        </div>
        <Footer />
      </div>
    </div>
  )
}
