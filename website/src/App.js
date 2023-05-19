import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import ArtView from './pages/ArtView';
import Gallery from "./pages/Gallery"
import Edit from './pages/Edit';
import SignIn from './pages/SignIn';
import About from './pages/About';
import { Helmet } from 'react-helmet';
import ScrollToTop from './components/ScrollToTop';

export const Context = React.createContext();

function App() {

  const [posts, setPosts] = useState([]);

  return (
    <div>
      <Helmet>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>
      <Context.Provider value={[posts, setPosts]}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/artview/:id' element={<ArtView />} />
          <Route path='/gallery/:medium' element={<Gallery />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
    </div>
  );
}

export default App;
