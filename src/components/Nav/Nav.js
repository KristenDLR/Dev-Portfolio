import React, { useEffect } from 'react';
import logo from '../../assets/cover/KristenDeLaRosa.gif';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {

  const {
    tabs = [],
    setCurrentTab,
    currentTab,
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

       {tabs.map((tab) => (
        <li
          className={`mx-1 ${currentTab.name === tab.name && 'navActive'}`}
          key={tab.name}
        >
          <span onClick={() => {setCurrentTab(tab)}}>
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
