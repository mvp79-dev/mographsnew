import React, { useEffect, useState } from "react";

export const SectionOne = () => {

    const [hideScrollText, setHideScrollText] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollThreshold = 100;
  
        if (window.scrollY > scrollThreshold) {
          setHideScrollText(true);
        } else {
          setHideScrollText(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <section className="section one">
          <div className="mobileScroll" >
      <div class="nav">
          <div class="left-content">
              <img class="smalllogo" src="/red.png" alt="logohere" />
          </div>
          <div class="center">
              <h1>MOGRAPHS</h1>
          </div>
      </div>
      <div className="content-one" >
          <h1 className="one-main" >Crafting <span className="one-blue" >Media</span><br/>Experiences</h1>
          <p className="one-description" >Create the type of content that<br/> you would want to watch yourself.</p>
      </div>
      </div>
        </section>
    )
}