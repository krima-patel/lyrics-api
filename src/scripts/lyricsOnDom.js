import getLyrics from '../api/getLyrics';
import renderToDom from './helpers/renderToDom';

// UI PRESENTATION:
const lyricsOnDom = (artist, song) => {
  // this is a promise, so we have to .then
  getLyrics(artist, song).then((response) => {
    renderToDom('#lyrics-container', response.lyrics);
  });
};

export default lyricsOnDom;
