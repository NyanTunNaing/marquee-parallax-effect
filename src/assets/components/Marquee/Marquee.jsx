// React Hooks
import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Marquee() {
  // Animation
  const firstText = useRef(null);
  const secondText = useRef(null);
  const marquee = useRef(null);
  let currentX = 0;
  const speed = 0.2;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(marquee.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (currentX <= -100) {
      currentX = 0;
    }
    if (currentX > 0) {
      currentX = -100;
    }
    gsap.set(firstText.current, { xPercent: currentX });
    gsap.set(secondText.current, { xPercent: currentX });
    currentX += speed * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="marquee">
      <div className="marquee-inner" ref={marquee}>
        <h1 ref={firstText}>Beyond the screen, into experience -</h1>
        <h1 ref={secondText}>Beyond the screen, into experience -</h1>
      </div>
    </div>
  );
}
