import React from 'react';
//import { Parallax } from 'react-spring/renderprops-addons.cjs';deperecated
import { Fade as RevealFade, Slide } from "react-awesome-reveal";
import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const ParallaxScroll = () => {
  return (
    <div className="parallax-container">
     
          <div className="left-content">
            <Slide>
            <h2 className="text-4xl font-bold mb-4">Experience the Power of AI</h2>
            </Slide>
            <RevealFade>  <p className="text-lg">
              Our AI-powered service offers unmatched convenience, simplicity, and remarkable results. With our cutting-edge technology, we bring you the latest advancements in artificial intelligence right at your fingertips.
            </p></RevealFade>
          
            <RevealFade> <p className="text-lg">
              Discover the ability to effortlessly change tones, fix spelling mistakes, and utilize all the incredible capabilities of AI in a user-friendly and straightforward manner. Revolutionize the way you work with our simple and powerful service.
            </p></RevealFade>
           
          </div>
   
          
<ScrollContainer>
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "30px" }}>Let me show you scroll animation 😀</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={ZoomInScrollOut}>
      <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
        - I'm Dante Chun -
        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
      </span>
    </div>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "40px" }}>Done</span>
      <br/>
      <span style={{ fontSize: "30px" }}>
        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
      </span>
    </Animator>
  </ScrollPage>
</ScrollContainer>
          <div className="right-content bg-gradient-to-b from-gray-200 to-white text-gray-800 py-8 px-4">
            <h3 className="text-2xl font-bold mb-4">Superior AI Service</h3>
            <p className="text-lg">
              Our service stands above the rest, providing unparalleled solutions to your needs. With our powerful AI algorithms, we deliver exceptional accuracy and efficiency, ensuring your tasks are completed with precision.
            </p>
            <p className="text-lg">
              Join us today and experience the future of AI in action. Unlock new possibilities and achieve outstanding results with our revolutionary service.
            </p>
          </div>
       
      
    </div>
  );
};

export default ParallaxScroll;
