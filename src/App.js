import React from 'react';
import './App.scss';
import Camera from './components/camera'
import Footer from './components/footer'
import Header from './components/header'

class App extends React.Component {
 
  render = () => {
    return (
        <div className="App">
            <Header />
            <Camera />
            <Footer />
        </div>
    );
  }
}

export default App;
