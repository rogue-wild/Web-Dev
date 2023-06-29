import React from 'react';
import SocialMetrics from './components/social_metrics';
import About from './components/about';
import SocialLinks from './components/social_links';
import "./App.css"

function App() {
  return (
    <div className='App'>
      <SocialMetrics />
      <About/>
      <SocialLinks/>
    </div>
  );
}

export default App;
