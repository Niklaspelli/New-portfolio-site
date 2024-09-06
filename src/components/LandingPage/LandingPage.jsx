import React, { useEffect } from "react";
import gsap from "gsap";
import "./LandingPage.css";

function LandingPage() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".glow", { y: "0%", duration: 1, stagger: 0.25 })
      .to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 })
      .to(".intro", { y: "-100%", duration: 1 }, "-=1")
      .fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  }, []);

  return (
    <>
      <section className="landing"></section>
      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className="glow">A</span>
          </h1>
          <h1 className="hide">
            <span className="glow">Creative</span>
          </h1>
          <h1 className="hide">
            <span className="glow">Frontend Developer</span>
          </h1>
        </div>
      </div>
      <div className="slider"></div>
    </>
  );
}

export default LandingPage;
