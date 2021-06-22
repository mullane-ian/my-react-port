
  import React, { Suspense, useRef, useEffect, useState, } from "react";
  import { Canvas } from "@react-three/fiber";
  import { OrbitControls, Stage, Html, useProgress } from "@react-three/drei";
  import Model from "./Model";
  import Header from "./components/Header"
  import "./App.scss";
  import { Section } from "./components/Section";
  import { a, useTransition } from "@react-spring/web"


  const HTMLContent = ({
    domContent,
    children,
    bgColor,
    modelPath,
    position,
  }) => {

    return (
      <Section factor={0.2} offset={1}>
        <group >
          <Html fullscreen portal={domContent} position={[0,-2,0]}>
            <div className='container'>
              <h1 className='title'>{children}</h1>
            </div>
          </Html>
        </group>
      </Section>
    );
  };
  function Loader() {
    const { active, progress } = useProgress();
    const transition = useTransition(active, {
      from: { opacity: 1, progress: 0 },
      leave: { opacity: 0 },
      update: { progress },
    });
    return transition(
      ({ progress, opacity }, active) =>
        active && (
          <a.div className='loading' style={{ opacity }}>
            <div className='loading-bar-container'>
              <a.div className='loading-bar' style={{ width: progress }}></a.div>
            </div>
          </a.div>
        )
    );
  }



  export default function Viewer() {
    const ref = useRef();
    
    return (
     <>
      <Header />
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
        <HTMLContent>
            <span>Front </span>
            <span>End </span>
            <span>Web Dev</span>
          </HTMLContent>
          <Stage
            controls={ref}
            preset="rembrandt"
            intensity={1}
            environment="dawn"
          >
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls useRef={ref} autoRotate enableZoom={false} enablePan={false} enableRotate={false}  />
      </Canvas>
      <Loader />
     </>
    );
  }    
