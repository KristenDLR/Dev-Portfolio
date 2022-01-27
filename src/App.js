import React from 'react';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Contact from './components/Contact/Contact';
import { useState } from 'react';


function App() {

  const [tabs] = useState([
    {
      name: "about",
      description:
        "Who am I?",
    },
    {
      name: "contact",
    description: "Get in touch with me"
  },
    {
      name: "portfolio",
      description: "A breif snapshot of some of my diverse work"
    },
    {
      name: "resume",
      description: "Examine my prior experience",
    },
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);



  return (
    <div>
      <Nav
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      ></Nav>
      <main>
        <About></About>
        <Contact></Contact>
      </main>
    </div>
  )
}

export default App;
//Photo by <a href="https://unsplash.com/@withkaispixels?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kai Mason</a> on <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//Photo by <a href="https://unsplash.com/@sonance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Viktor Forgacs</a> on <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//Photo by <a href="https://unsplash.com/@mitchel3uo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mitchell Luo</a> on <a href="https://unsplash.com/s/photos/wood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
