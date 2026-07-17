export const SPOTIFY_ARTIST =
  'https://open.spotify.com/intl-es/artist/7ytoVQBwppgzLlauvYSyIu'

export const BANDCAMP_BASE = 'https://fracasoinminente.bandcamp.com'

/** Discografía completa — más reciente primero */
export const RELEASES = [
  {
    title: 'Atrapado en el tiempo',
    year: '2026',
    type: 'Single',
    isNew: true,
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
    title: 'El respeto es algo muy lindo',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/2egDDKe0UDbTpLfeuopXWP',
  },
  { title: 'Rikk', year: '2025', type: 'Single' },
  {
    title: '66',
    year: '2025',
    type: 'Album',
    spotifyUrl: 'https://open.spotify.com/album/04dhS9dTst6rz9fZQxAXBR',
  },
  { title: 'DanC', year: '2025', type: 'Album' },
  {
    title: 'HMC',
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
    title: 'Soñé que estaba',
    year: '2025',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/0a4gr7EsjE1MGZhq88Exku',
  },
  { title: 'qORigin', year: '2025', type: 'Single' },
  { title: 'debounceTime', year: '2025', type: 'Single' },
  { title: 'Madness Minor', year: '2025', type: 'Single' },
]

/**
 * Tracks con reproductor embebido en Bandcamp.
 * IDs obtenidos de las páginas de Bandcamp (parámetro track=).
 */
export const BANDCAMP_TRACKS = [
  { label: 'Atrapado en el tiempo', id: 3012761151 },
  { label: 'Concept', id: 636952075 },
  { label: 'Temnoreg', id: 1434571680 },
  { label: 'El respeto es algo muy lindo', id: 3757018086 },
  { label: 'Rikk', id: 2391899662 },
  { label: 'Madness minor', id: 1884971493 },
  { label: 'debounceTime', id: 2045998602 },
  { label: 'qORigin', id: 886539658 },
  { label: 'Living Being (inst.)', id: 3455489065 },
  { label: 'Living being', id: 2425104754 },
  { label: 'HMC', id: 3911471683 },
  { label: 'Dan C', id: 3817215727 },
]

export function bandcampEmbedSrc(trackId) {
  return `https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=small/bgcol=070707/linkcol=cc0000/transparent=true/`
}
