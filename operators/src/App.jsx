import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MyApp from './Components/MyApp';

ReactDOM.render(
  <Router>
    <MyApp />
  </Router>,
  document.getElementById('root')
);
export default App;