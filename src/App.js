import { Routes, Route, HashRouter } from "react-router-dom";
import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Detail from "./components/Detail";

function App() {
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    document.title = 'Disney+ clone';
    link.href = '/images/favicon.ico';
  }, []);


  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
