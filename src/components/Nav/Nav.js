import React, { useEffect } from 'react';
import logo from '../../assets/cover/KristenDeLaRosa.gif';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {

  const {
    tabs = [],
    setCurrentTab,
    currentTab,
    contactSelected,
    setContactSelected,

  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);
// const tabSelected = (name) => {
//     console.log(`${name} clicked`)
//   }

  return (
    <header className="flex-row px-1">
       <nav>
       <ul className="flex-row">
        <img src = {logo} alt="Kristen De La Rosa Logo" height = "100px"/>


          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              Home
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {tabs.map((tab) => (
            <li
              className={`mx-1 ${
                currentTab.name === tab.name && !contactSelected && 'navActive'
                }`}
              key={tab.name}
            >
              <span
                onClick={() => {
                  setCurrentTab(tab);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(tab.name)}
              </span>
            </li>
          ))}
        </ul>

  </nav>
</header>
  );
}



export default Nav;
