import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
<<<<<<< HEAD
import ArtView from './pages/ArtView';
=======
import Gallery from "./pages/Gallery"
>>>>>>> cf5952f5dcf7a54a1958ad90c2157fe00f3e7506

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/upload' element={<Upload />} />
<<<<<<< HEAD
        <Route path='/artview' element={<ArtView />} />
=======
        <Route path='/gallery' element={<Gallery />} />
>>>>>>> cf5952f5dcf7a54a1958ad90c2157fe00f3e7506
      </Routes>
    </BrowserRouter>
  );
}

export default App;
