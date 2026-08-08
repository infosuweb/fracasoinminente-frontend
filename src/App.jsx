import Hero from './components/Hero'
import ArtStrip from './components/ArtStrip'
import ListenPlayer from './components/ListenPlayer'
import MusicLinks from './components/MusicLinks'
import Releases from './components/Releases'
import Press from './components/Press'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-svh">
      <Hero />
      <ArtStrip />
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
