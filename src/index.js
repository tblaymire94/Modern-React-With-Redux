import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAbIy7oKYYKKNfxqQte9rz-DnVkTdHoH24';

import SearchBar from './components/search_bar';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
