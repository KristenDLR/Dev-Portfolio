import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  // const [tabs] = useState([
  //   {
  //     name: "about",
  //     description:
  //       "Who am I?",
  //   },
  //   {
  //     name: "contact",
  //   description: "Get in touch with me"
  // },
  //   {
  //     name: "portfolio",
  //     description: "A brief snapshot of some of my diverse work"
  //   },
  //   {
  //     name: "resume",
  //     description: "Examine my prior experience",
  //   },
  // ]);




  return (

    <BrowserRouter>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="portfolio" element={<Portfolio />} />

        <Route path="/resume" element={<Resume />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App;
//Photo by <a href="https://unsplash.com/@withkaispixels?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kai Mason</a> on <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//Photo by <a href="https://unsplash.com/@sonance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Viktor Forgacs</a> on <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//Photo by <a href="https://unsplash.com/@mitchel3uo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mitchell Luo</a> on <a href="https://unsplash.com/s/photos/wood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
