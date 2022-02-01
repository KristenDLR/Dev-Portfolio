import React from 'react';
import skyline from '../../assets/cover/viktor-forgacs-a4m8r3Esteg-unsplash.jpg'
import { capitalizeFirstLetter } from '../../utils/helpers';

function Resume() {
  const currentTab= {
    name: "resume",
    description: "Examine my prior experience",
  };


  return (
    <section className="my-5">
      {/* my-5: m - for classes that set margin, y - for classes that set both *-top and *-bottom, 5 - (by default) for classes that set the margin or padding to $spacer * 3 */}
      <h1>{capitalizeFirstLetter(currentTab.name)}</h1>
      <img src={skyline} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>

  );
}

export default Resume;
