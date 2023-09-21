
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import video from './images/video.mp4'
import Home from './pages/Home';
import About from './pages/About';
import Sidebar from './components/Sidebar';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import AnimCursor from './components/AnimCursor';

function App() {
  return (
    <>
      <BrowserRouter>
      <video src={video} autoPlay loop muted />
      <Header />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/about-me' element={<About/>}/>
          <Route path='/about-me/detail' element={<Sidebar/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <AnimCursor/>
      </BrowserRouter>
    </>
  );
}

export default App;
