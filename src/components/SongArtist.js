import React from 'react';
import { connect } from 'react-redux';

const SongArtist = ({ song }) => {

};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);