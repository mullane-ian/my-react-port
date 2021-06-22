
  import React, { Suspense, useRef } from "react";
  import { Canvas } from "@react-three/fiber";
  import { OrbitControls, Stage } from "@react-three/drei";
  import Model from "./Model";
  import Header from "./components/Header"
  
  export default function Viewer() {
    const ref = useRef();
  
    return (
     <>
      <Header />
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <Stage
            controls={ref}
            preset="rembrandt"
            intensity={1}
            environment="city"
          >
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>
     </>
    );
  }    
