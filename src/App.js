import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './components/Routes'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
