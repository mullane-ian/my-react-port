
  import React, { Suspense, useRef, useEffect, useState, } from "react";
  import { Canvas, useFrame } from "@react-three/fiber";
  import { OrbitControls, Stage, Html, useProgress,useGLTF } from "@react-three/drei";
  import Model from "./Model";
  import Header from "./components/Header"
  import Home from "./components"
  import "./App.scss";
  import { Section } from "./components/Section";
  import { a, useTransition } from "@react-spring/web"
  import state from './components/state'
  import { useInView } from 'react-intersection-observer';
  import Modal from 'react-modal'
  function MyModel({ url,}) {
    const gltf = useGLTF(url);
    return <primitive object={gltf.scene} dispose={null} />;
  }

  const Lights = () => {
    return (
      <>
        {/* Ambient Light illuminates lights for all objects */}
        <ambientLight intensity={0.3} />
        {/* Diretion light */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* Spotlight Large overhead light */}
        <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
      </>
    );
  };

  const HTMLContent = ({
    domContent,
    children,
    bgColor,
    modelPath,
    position,
    modelPosition
  }) => {
    const ref = useRef();
     useFrame(() => (ref.current.rotation.y += 0.005));
    const [refItem, inView] = useInView({
      threshold: 0,
    });
    useEffect(() => {
      inView && (document.body.style.background = bgColor);
    }, [inView]);
    
    return (
      <Section factor={1.5} offset={1}>
        <group position={[0, position, 0]}>
          <mesh ref={ref} position={modelPosition} scale={[30,30,30]}>
            <MyModel  url={modelPath}/>
          </mesh>
    
          <Html center portal={domContent}>
            <div ref={refItem} className='container'>
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
    const [events, setEvents,] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(true)
    const domContent = useRef();
    const scrollArea = useRef();
    const onScroll = (e) => (state.top.current = e.target.scrollTop);
    useEffect(() => void onScroll({ target: scrollArea.current }), []);
    
    return (
     <>
     
      <Header />
      <Canvas shadows dpr={[1, 2]} camera={{position: [0, 0, 120], fov: 70 }}>
        <Suspense fallback={null}>
        <HTMLContent
            domContent={domContent}
            bgColor='#698976'
            position={250}
            modelPath='https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/cactus/model.gltf'
            modelPosition={[0,-35,0]}
           >
            <span>Welcome!</span>
            <span>My name is Ian</span>
          
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            bgColor='#60495a'
            position={0}
            modelPath='https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/react-logo/model.gltf'
            modelPosition={[70,-35,0]}
           >
            <span>With the help of</span>
            <span>JavaScript React ThreeJS and more!</span>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            bgColor='#bfc3ba'
            position={-250}
            modelPath='https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ankou-with-cart/model.gltf'
            modelPosition={[-80,-35,0]}
           >
           <span>I want to change</span>
            <span>the way Arizona</span>
            <span>businesses present</span>
            <span>themselves online!</span>
          </HTMLContent>
          {/*  */}
          <Lights />


    

          




          
        </Suspense>
        {/* <OrbitControls useRef={ref} autoRotate enableZoom={false} enablePan={false} enableRotate={false}  /> */}
      </Canvas>
      <Loader />
      
 
     
      <div
        className='scrollArea'
        ref={scrollArea}
        onScroll={onScroll}
        {...events}>
        <div style={{ position: "sticky", top: 0 }} ref={domContent} />
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
     </>
    );
  }    
