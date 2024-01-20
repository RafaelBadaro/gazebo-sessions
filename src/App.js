import './App.css';
import MyNavBar from './components/MyNavBar/MyNavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import About from './components/About/About';
import Sessions from './components/Sessions/Sessions';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter className="app">
        <Routes>
          <Route path="/" element={<MyNavBar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="sessions" element={<Sessions />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
