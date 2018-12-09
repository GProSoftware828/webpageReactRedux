import { combineReducers } from 'redux'; //Documentation says if is a named component

const songsReducer = () => {
  return [
    { title: 'Humming1', duration: '4:05' },
    { title: 'Beatz', duration: '3:39' },
    { title: 'SoundzYa', duration: '5:13' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});