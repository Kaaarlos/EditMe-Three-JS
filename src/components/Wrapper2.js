import React from "react";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import ModelArbol from "./ModelArbol";
import * as THREE from "three";

const Wrapper2 = ({ ...props }) => {
  const [tronco, setTronco] = useState("#ffffff");
  const [hojas, setHojas] = useState("#ffffff");

  return (
    <div class="wrapper">
      <div className="card">
        <div class="product-canvas">
          <Canvas
            gl={{
              outputEncoding: THREE.sRGBEncoding,
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 3.4,
            }}
          >
            <color attach={"background"} args={["#8C86BC"]} />
            <Suspense>
            <spotLight
                intensity={0.9}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <directionalLight
                position={[10, 10, 10]}
                color={"white"}
                intensity={0.4}
              />
              <ambientLight intensity={0.01} color={"#ffffff"} />
              <ModelArbol
                customColors={{
                  tronco: tronco,
                  hojas: hojas,
                  arbol: props.customArbol.arbol,
                }}
              />
            </Suspense>
            <Stars count={1000} />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Canvas>
        </div>
        <h2>pintame como a una de tus monas chinas </h2>

        <div className="colors">
          <div>
            <input
              type="color"
              id="tronco"
              name="tronco"
              value={tronco}
              onChange={(e) => setTronco(e.target.value)}
            />
            <label for="tronco">Hojas</label>
          </div>

          <div>
            <input
              type="color"
              id="hojas"
              name="hojas"
              value={hojas}
              onChange={(e) => setHojas(e.target.value)}
            />
            <label for="hojas">Tronco</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper2;
