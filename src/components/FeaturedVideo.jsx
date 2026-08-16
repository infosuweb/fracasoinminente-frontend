const REEL_URL = 'https://www.instagram.com/fracasoinminente.band/reel/DcG3ZXgsJ5g/'

export default function FeaturedVideo() {
  return (
    <section className="px-6 sm:px-12 md:px-16 py-12 sm:py-16" id="video">
      <div className="flex items-center gap-4 mb-7">
        <h2 className="section-label batman-label">Nuevo video</h2>
        <div className="flex-1" style={{ height: '1px', background: 'var(--color-line)' }} />
      </div>

      <div className="featured-video-grid">
        <div className="featured-video-copy">
          <h2 className="featured-video-title">
            El curro
            <br />
            de Batman
          </h2>
          <a
            className="featured-video-link"
            href={REEL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver también en Instagram ↗
          </a>
        </div>

        <div className="featured-video-frame">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/media/el-curro-de-batman-cover.jpg"
            aria-label="El curro de Batman — Fracaso Inminente"
          >
            <source src="/media/el-curro-de-batman.mp4" type="video/mp4" />
            Tu navegador no puede reproducir este video.
          </video>
        </div>
      </div>
    </section>
  )
}
