import React from 'react';
import dots from "../../assets/cover/kai-mason-4BM4nHPBI_Y-unsplash.jpg";

function About() {
  return (
    <section className="my-5">
      {/* my-5: m - for classes that set margin, y - for classes that set both *-top and *-bottom, 5 - (by default) for classes that set the margin or padding to $spacer * 3 */}
      <h1 id="about">Kristen De La Rosa</h1>
      <img src={dots} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>

  );
}

export default About;

