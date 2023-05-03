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

export const Context = React.createContext();

function App() {

  const [posts, setPosts] = useState([]);

  return (
    <Context.Provider value={[posts, setPosts]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/artview/:id' element={<ArtView />} />
          <Route path='/gallery/:tag' element={<Gallery />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
