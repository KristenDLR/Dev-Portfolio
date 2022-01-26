import React from 'react';

function Nav() {
  const tabs = [
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
  ];


const tabSelected = (name) => {
    console.log(`${name} clicked`)
  }

  return (
    <header>
  <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
       {tabs.map((tab) => (
        <li
          className="mx-1"
          key={tab.name}
        >
          <span onClick={() => tabSelected(tab.name)}>
            {tab.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
</header>
  );
}



export default Nav;
