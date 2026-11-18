export const SPOTIFY_ARTIST =
  'https://open.spotify.com/intl-es/artist/7ytoVQBwppgzLlauvYSyIu'

export const SPOTIFY_PLAYLIST =
  'https://open.spotify.com/playlist/4FhzoaKwLXbM1W6ssWz8pU'

export const SPOTIFY_PLAYLIST_EMBED =
  'https://open.spotify.com/embed/playlist/4FhzoaKwLXbM1W6ssWz8pU?utm_source=generator&theme=0'

export const BANDCAMP_BASE = 'https://fracasoinminente.bandcamp.com'
export const YOUTUBE_CHANNEL = 'https://www.youtube.com/channel/UC_I0KeMzcVHRgreLZcY4heg'

/** Featured / campaign track */
export const LEADER = {
  title: 'En tu mente',
  spotifyUrl: 'https://open.spotify.com/track/4215ymYxU1b04uCzbukqqL',
  spotifyEmbedSrc:
    'https://open.spotify.com/embed/track/4215ymYxU1b04uCzbukqqL?utm_source=generator&theme=0',
  bandcampUrl: 'https://fracasoinminente.bandcamp.com/track/en-tu-mente',
  bandcampTrackId: 2366923901,
}

/**
 * Bandcamp discography — newest first.
 * Source: Bandcamp band_details API (band_id 822095025), Nov 2026.
 */
export const BANDCAMP_TRACKS = [
  { label: 'Surrender', id: 3129273886 },
  { label: 'En tu mente', id: 2366923901 },
  { label: 'Fases', id: 3319685836 },
  { label: 'Lamelo', id: 609942719 },
  { label: 'Mixolidias alteradas', id: 3442550028 },
  { label: 'Sunday mood', id: 3864031778 },
  { label: 'Phalaropus', id: 814276696 },
  { label: 'Seile', id: 3327961254 },
  { label: 'El curro de Batman', id: 821695476 },
  { label: 'QPachó?', id: 2755078416 },
  { label: 'Rain', id: 1558500824 },
  { label: '77', id: 965501322 },
  { label: 'Otra vez en verano', id: 1590949334 },
  { label: 'Atrapado en el tiempo', id: 3012761151 },
  { label: 'Concept', id: 636952075 },
  { label: 'temnoreg', id: 1434571680 },
  { label: 'Litigio', id: 649364037 },
  { label: 'El respeto es algo muy lindo', id: 3757018086 },
  { label: 'Rikk', id: 2391899662 },
  { label: 'Vols', id: 1507265218 },
  { label: 'Hoy MC', id: 3911471683 },
  { label: 'Living Being (instrumental)', id: 3455489065 },
  { label: 'Living being', id: 2425104754 },
  { label: 'qOrigin', id: 886539658 },
  { label: 'Dan C', id: 3817215727 },
  { label: 'Debounce Time', id: 2045998602 },
  { label: 'Madness minor', id: 1884971493 },
]

/**
 * Spotify catalog on the official playlist — newest first.
 * Ordered by Bandcamp release dates where titles match.
 * Not on Spotify yet: Surrender, Sunday mood, Seile, Litigio, Rikk, Vols.
 */
export const SPOTIFY_TRACKS = [
  { label: 'En tu mente', id: '4215ymYxU1b04uCzbukqqL' },
  { label: 'Fases', id: '3d0JavaT9BpzdC5BjpFF4B' },
  { label: 'Lamelo', id: '2WTxHgUV2dbEscKhBSZBXt' },
  { label: 'Mixolidias alteradas', id: '5NcArwhJCFrrthmu5wW9F7' },
  { label: 'Phalaropus', id: '635gTn5tC6CbNTPHOzPBW0' },
  { label: 'El curro de Batman', id: '60gjxgMA4pwMI3SdrOEoUq' },
  { label: 'QPachó?', id: '5sqJwAbEKNznc63h9pWuXC' },
  { label: 'Rain', id: '2YYneu6RXJmN5KsNcCzpZi' },
  { label: '77', id: '7iguLCWoPpPJPU0onzlDcO' },
  { label: 'Otra vez en verano', id: '1OYsGwVQjXKSL9eVonTqO5' },
  { label: 'Atrapado en el tiempo', id: '6xmI86laNbdbvTRDs7UpBU' },
  { label: 'Concept', id: '5vadAA4jTDeJ6j5jdkWKPa' },
  { label: 'Temnoreg', id: '4Q201KjJNbvoHCGylPmKaB' },
  { label: 'Soñé que estaba', id: '1TwPontYPagaqxlYvCTrR6' },
  { label: 'El respeto es algo muy lindo', id: '1Vb2JFYP42TiQrLQEIXRuY' },
  { label: 'HMC', id: '2u6xKGjZiU4xOqWFxwxL23' },
  { label: 'Living Being (INSTRUMENTAL)', id: '6JaNDxYrcXgjylg3pkhECg' },
  { label: 'Living being', id: '5zLQKr4WuVghZ0RACWtVyC' },
  { label: 'Qué Origin', id: '6kOGbKRMyQaTGZszamFF9F' },
  { label: 'Dan C', id: '7ige0hML4fBYOXqOX3BcQf' },
  { label: '66', id: '1cL5MRzKNhsrEj3zhzyopT' },
  { label: 'Debounce Time', id: '1VAELbCrPuAIsmJ6MFWP4k' },
  { label: 'Madness Minor', id: '5U1Uh6zz5jkO1DXqvyXDmS' },
]

/** Discografía unificada — más reciente primero */
export const RELEASES = [
  { title: 'Surrender', year: '2026', type: 'Single' },
  {
    title: 'En tu mente',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/track/4215ymYxU1b04uCzbukqqL',
  },
  {
    title: 'Fases',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/track/3d0JavaT9BpzdC5BjpFF4B',
  },
  {
    title: 'Lamelo',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/track/2WTxHgUV2dbEscKhBSZBXt',
  },
  {
    title: 'Mixolidias alteradas',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/track/5NcArwhJCFrrthmu5wW9F7',
  },
  { title: 'Sunday mood', year: '2026', type: 'Single' },
  {
    title: 'Phalaropus',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/track/635gTn5tC6CbNTPHOzPBW0',
  },
  { title: 'Seile', year: '2026', type: 'Single' },
  {
    title: 'El curro de Batman',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/track/60gjxgMA4pwMI3SdrOEoUq',
  },
  {
    title: 'QPachó?',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/track/5sqJwAbEKNznc63h9pWuXC',
  },
  {
    title: 'Rain',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/track/2YYneu6RXJmN5KsNcCzpZi',
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
  { title: 'Litigio', year: '2026', type: 'Single' },
  {
    title: 'Soñé que estaba',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/0a4gr7EsjE1MGZhq88Exku',
  },
  {
    title: 'El respeto es algo muy lindo',
    year: '2026',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/2egDDKe0UDbTpLfeuopXWP',
  },
  { title: 'Rikk', year: '2025', type: 'Single' },
  { title: 'Vols', year: '2025', type: 'Single' },
  {
    title: 'Hoy MC',
    year: '2025',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/46mybzU8nTjuCZhSiSDYkR',
  },
  {
    title: 'Living Being (INSTRUMENTAL)',
    year: '2025',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/4V3QmHcgpWlngkCgUQQJZd',
  },
  {
    title: 'Living Being',
    year: '2025',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/3JZ47DgYZ5O1E3MQxoMx8C',
  },
  { title: 'qOrigin', year: '2025', type: 'Single' },
  { title: 'Dan C', year: '2025', type: 'Single' },
  {
    title: '66',
    year: '2025',
    type: 'Single',
    spotifyUrl: 'https://open.spotify.com/album/04dhS9dTst6rz9fZQxAXBR',
  },
  { title: 'Debounce Time', year: '2025', type: 'Single' },
  { title: 'Madness Minor', year: '2025', type: 'Single' },
]

/**
 * @param {number|string} trackId
 * @param {'small' | 'large'} [size]
 */
export function bandcampEmbedSrc(trackId, size = 'large') {
  return `https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=${size}/bgcol=0a0a0a/linkcol=ffffff/artwork=small/transparent=true/`
}

/**
 * @param {string} trackId
 */
export function spotifyEmbedSrc(trackId) {
  return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`
}
