import React from 'react';
import './App.scss';
import Camera from './components/camera'
import Footer from './components/footer'

class App extends React.Component {
 
  render = () => {
    return (
        <div className="App">
            <Camera />
            <Footer />
        </div>
    );
  }
}

export default App;
