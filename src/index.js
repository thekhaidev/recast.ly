// TODO: Render the `App` component to the DOM
// import React from 'react';
// import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import { YOUTUBE_API_KEY } from './config/config.js';

// var TestClass = (props) => (

//   App

// )



ReactDOM.render(<App searchYouTube={searchYouTube} API_KEY={YOUTUBE_API_KEY} />, document.getElementById('app'));