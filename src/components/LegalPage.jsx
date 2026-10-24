const copy = {
  privacy: {
    title: 'Privacy Policy',
    updated: '2026-08-08',
    body: [
      'Fracaso Inminente (“we”) operates fracasoinminente.com and related campaign tools that help publish music content to social platforms such as Instagram and TikTok.',
      'When you authorize our developer apps, we may receive account identifiers and tokens needed to publish content you explicitly request. We do not sell personal data.',
      'Tokens and credentials are stored only for publishing automation and may be revoked by you at any time in Meta or TikTok settings.',
      'Contact: maximendez@suweb.com.uy',
    ],
  },
  terms: {
    title: 'Terms of Service',
    updated: '2026-08-08',
    body: [
      'Fracaso Inminente provides a website and content tools for the musical project Fracaso Inminente.',
      'By using our site or authorizing our apps to post on your behalf, you agree that posts are made only with your consent and for legitimate music promotion.',
      'Content remains owned by Fracaso Inminente. Third-party platforms (Spotify, Instagram, TikTok, etc.) are governed by their own terms.',
      'Contact: maximendez@suweb.com.uy',
    ],
  },
}

export default function LegalPage({ kind }) {
  const page = copy[kind] || copy.privacy

  return (
    <main
      style={{
        minHeight: '100svh',
        background: '#0a0a0a',
        color: '#f2f2f2',
        padding: '48px 24px 80px',
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.6,
      }}
    >
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <p style={{ opacity: 0.6, fontSize: 14, marginBottom: 8 }}>
          <a href="/" style={{ color: '#fff' }}>
            Fracaso Inminente
          </a>
        </p>
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>{page.title}</h1>
        <p style={{ opacity: 0.55, fontSize: 13, marginBottom: 28 }}>
          Last updated: {page.updated}
        </p>
        {page.body.map((p) => (
          <p key={p.slice(0, 24)} style={{ marginBottom: 16 }}>
            {p}
          </p>
        ))}
      </div>
    </main>
  )
}
