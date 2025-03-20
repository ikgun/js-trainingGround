/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 *
 */
export function removeDuplicates(playlist) {
  const set = new Set(playlist);
  playlist.length = 0;
  playlist.push(...set);
  return playlist;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const set = new Set(playlist);
  return set.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 *
 */
export function addTrack(playlist, track) {
  const set = new Set(playlist);
  set.add(track);
  playlist.length = 0;
  playlist.push(...set);
  return playlist;
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 *
 */
export function deleteTrack(playlist, track) {
  const set = new Set(playlist);
  set.delete(track);
  playlist.length = 0;
  playlist.push(...set);
  return playlist;
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const artists = new Set();

  for (const track of playlist) {
    artists.add(track.split(" - ")[1]);
  }

  playlist.length = 0;
  playlist.push(...artists);
  return playlist;
}
