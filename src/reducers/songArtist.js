import { combineReducers } from 'redux';

const ArtistsReducer = () => {
  return [
    { artist: 'DJ first song' },
    { artist: 'DJ second song' },
    { artist: 'DJ third song' }
  ];
};

const selectedArtistReducer = (selectedArtist = null, action) => {
  if (action.type === 'ARTIST_SELECTED') {
    return action.payload;
  }

  return selectedArtist;
};

export default combineReducers({
  songs: songsReducer,
  selectedArtist: selectedArtistReducer
});