export const SPOTIFY_ARTIST =
  'https://open.spotify.com/intl-es/artist/7ytoVQBwppgzLlauvYSyIu'

export const BANDCAMP_BASE = 'https://fracasoinminente.bandcamp.com'

/** Single líder de la campaña actual (crecimiento Spotify) */
export const LEADER = {
  title: 'Rain',
  spotifyUrl: 'https://open.spotify.com/album/4jRzljVGgLdfgZUYgNTNWh',
  spotifyEmbedSrc:
    'https://open.spotify.com/embed/album/4jRzljVGgLdfgZUYgNTNWh?utm_source=generator&theme=0',
  bandcampUrl: 'https://fracasoinminente.bandcamp.com/track/rain',
  bandcampTrackId: 1558500824,
}

/** Discografía completa — más reciente primero (Bandcamp + Spotify, ago 2026) */
export const RELEASES = [
  {
    title: 'QPachó?',
    year: '2026',
    type: 'Single',
  },
  {
    title: 'Rain',
    year: '2026',
    type: 'Single',
    isNew: true,
    spotifyUrl: 'https://open.spotify.com/album/4jRzljVGgLdfgZUYgNTNWh',
  },
  {
    title: '77',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/38vLotQKzRKMVTKibP06w5',
  },
  {
    title: 'Otra vez en verano',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/1EEbTfPXOfu04GQzZrHia1',
  },
  {
    title: 'Atrapado en el tiempo',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/2vXIv3I7QpYdjlh7bLlw1m',
  },
  {
    title: 'Concept',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/6mwO43yRyH1TFXTNjcyWSy',
  },
  {
    title: 'Temnoreg',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/3PsiA8jx0NuWLQZqbbSGbU',
  },
  {
    title: 'Litigio',
    year: '2026',
    type: 'Single',
  },
  {
    title: 'El respeto es algo muy lindo',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/2egDDKe0UDbTpLfeuopXWP',
  },
  {
    title: 'Rikk',
    year: '2025',
    type: 'Single',
  },
  {
    title: 'Soñé que estaba',
    year: '2025',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/0a4gr7EsjE1MGZhq88Exku',
  },
  {
    title: 'Vols',
    year: '2025',
    type: 'Single',
  },
  {
    title: 'Hoy MC',
    year: '2025',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/46mybzU8nTjuCZhSiSDYkR',
  },
  {
    title: 'Living Being',
    year: '2025',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/3JZ47DgYZ5O1E3MQxoMx8C',
  },
  {
    title: 'Living Being (INSTRUMENTAL)',
    year: '2025',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/4V3QmHcgpWlngkCgUQQJZd',
  },
  {
    title: 'qOrigin',
    year: '2025',
    type: 'Single',
  },
  {
    title: 'Dan C',
    year: '2025',
    type: 'Single',
  },
  {
    title: 'Debounce Time',
    year: '2025',
    type: 'Single',
  },
  {
    title: '66',
    year: '2025',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/04dhS9dTst6rz9fZQxAXBR',
  },
  {
    title: 'Madness Minor',
    year: '2025',
    type: 'Single',
  },
]

/**
 * Tracks con reproductor embebido en Bandcamp.
 * IDs = tralbum_id de cada página /track (ago 2026).
 */
export const BANDCAMP_TRACKS = [
  { label: 'QPachó?', id: 2755078416 },
  { label: 'Rain', id: 1558500824 },
  { label: '77', id: 965501322 },
  { label: 'Otra vez en verano', id: 1590949334 },
  { label: 'Atrapado en el tiempo', id: 3012761151 },
  { label: 'Concept', id: 636952075 },
  { label: 'Temnoreg', id: 1434571680 },
  { label: 'Litigio', id: 649364037 },
  { label: 'El respeto es algo muy lindo', id: 3757018086 },
  { label: 'Rikk', id: 2391899662 },
  { label: 'Vols', id: 1507265218 },
  { label: 'Hoy MC', id: 3911471683 },
  { label: 'Living Being (inst.)', id: 3455489065 },
  { label: 'Living being', id: 2425104754 },
  { label: 'qOrigin', id: 886539658 },
  { label: 'Dan C', id: 3817215727 },
  { label: 'Debounce Time', id: 2045998602 },
  { label: 'Madness minor', id: 1884971493 },
]

export function bandcampEmbedSrc(trackId) {
  return `https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=small/bgcol=070707/linkcol=cc0000/transparent=true/`
}
