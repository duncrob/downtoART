import './App.css';
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import ArtView from './pages/ArtView';
import Gallery from "./pages/Gallery"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/artview' element={<ArtView />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
