import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Footer from '../Footer/Footer';
import resume from '../../assets/cover/2022WDResumeLA.jpg';
import resumePDF from '../Resume/2022WDResumeLA.pdf';
import download from '../../assets/icons/Resume_download/icons8-download-resume-40.png'

function Resume() {
  const currentTab= {
    name: "resume",
    description: "Examine my prior experience",
  };


  return (

    <section className="my-5">
      {/* my-5: m - for classes that set margin, y - for classes that set both *-top and *-bottom, 5 - (by default) for classes that set the margin or padding to $spacer * 3 */}
      <h1 id="home2">{capitalizeFirstLetter(currentTab.name)}</h1>
           <a style={{ textAlign:"center", color:"pink", padding:"50px"}}href={resumePDF} download><img src={download} alt="download resume"></img>Download Resume</a>
      <img src={resume} className="my-2" style={{ width: "80%", marginLeft: '10%' }} alt="cover" />
      <Footer></Footer>
    </section>
    


  );
}

export default Resume;
