import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import SongArtist from './SongArtist';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <div class="col-md-4">
            <SongList />
          </div>
          <div class="col-md-8">
            <SongArtist />
          </div>
        </div>
      </div>
      <div className="column eight wide">
        <SongDetail />
      </div>
    </div >
  );
};

export default App;