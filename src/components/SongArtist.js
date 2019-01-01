import React from 'react';
import { connect } from 'react-redux';

const SongArtist = ({ artist }) => {
  if (!artist) {
    return
  } else {
    return (
      <div>
        <p>Artist: {song.artist}</p>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return { artist: state.selectedSong }
};

export default connect(mapStateToProps)(SongArtist);