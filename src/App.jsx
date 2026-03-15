import Hero from './components/Hero'
import MusicLinks from './components/MusicLinks'
import Releases from './components/Releases'
import SpotifyEmbed from './components/SpotifyEmbed'
import Press from './components/Press'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-svh" style={{ background: 'var(--color-paper)' }}>
      <Hero />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <MusicLinks />
        <SpotifyEmbed />
        <Releases />
        <Press />
      </div>
      <Footer />
    </div>
  )
}
