import Hero from './components/Hero'
import ListenPlayer from './components/ListenPlayer'
import MusicLinks from './components/MusicLinks'
import Releases from './components/Releases'
import Press from './components/Press'
import Footer from './components/Footer'
import SmartLinks from './components/SmartLinks'
import LegalPage from './components/LegalPage'

function isSmartLinkPath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  return path === '/links'
}

function legalKind(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/privacy') return 'privacy'
  if (path === '/terms') return 'terms'
  return null
}

export default function App() {
  if (typeof window !== 'undefined') {
    const kind = legalKind(window.location.pathname)
    if (kind) return <LegalPage kind={kind} />
    if (isSmartLinkPath(window.location.pathname)) return <SmartLinks />
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
