import React from 'react';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // const [contactSelected, setContactSelected] = useState(false);


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

  // const [currentTab, setCurrentTab] = useState(tabs[0]);



  return (

    <BrowserRouter>
      <Nav></Nav>
      {/* <div>
        <Link to="/">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume" >Resume</Link>
        <Link to="/contact">Contact</Link>
      </div> */}
      <Routes>
        <Route path="/" element={<About />} />

        <Route path="portfolio" element={<Portfolio />} />

        <Route path="/resume" element={<Resume />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
    // <div>
    //   <Nav
    //     tabs={tabs}
    //     setCurrentTab={setCurrentTab}
    //     currentTab={currentTab}
    //     contactSelected={contactSelected}
    //     setContactSelected={setContactSelected}
    //   ></Nav>
    //   <main>
    //   {!contactSelected ? (
    //    <>
    //    <About currentCategory={currentTab}></About>
    //     <Portfolio></Portfolio>
    //   </>
    //   ) : (

    // <Contact></Contact>
    //   )}
    //   <Resume></Resume>

    //   </main>
    // </div>
  )
}

export default App;
//Photo by <a href="https://unsplash.com/@withkaispixels?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kai Mason</a> on <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//Photo by <a href="https://unsplash.com/@sonance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Viktor Forgacs</a> on <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//Photo by <a href="https://unsplash.com/@mitchel3uo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mitchell Luo</a> on <a href="https://unsplash.com/s/photos/wood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
