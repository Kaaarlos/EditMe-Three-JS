import React from "react";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
//import ModelGato from "./ModelGato";
import * as THREE from "three";

const Wrapper4 = ({ ...props }) => {
  const [bigotes, setBigotes] = useState("#ffffff");
  const [cabeza, setCabeza] = useState("#ffffff");
  const [ojos, setOjos] = useState("#ffffff");
  const [cejas, setCejas] = useState("#ffffff");
  const [nariz, setNariz] = useState("#ffffff");
  const [orejas, setOrejas] = useState("#ffffff");

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
              
              <ModelGato
                customColors={{
                  bigotes: bigotes,
                  cabeza: cabeza,
                  ojos: ojos,
                  cejas: cejas,
                  nariz: nariz,
                  orejas: orejas,
                  gato: props.customGato.gato,
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
        <h2>Color chooser</h2>

        <div className="colors">
          <div>
            <input
              type="color"
              id="bigotes"
              name="bigotes"
              value={bigotes}
              onChange={(e) => setBigotes(e.target.value)}
            />
            <label for="bigotes">bigotes</label>
          </div>

          <div>
            <input
              type="color"
              id="cabeza"
              name="cabeza"
              value={cabeza}
              onChange={(e) => setCabeza(e.target.value)}
            />
            <label for="cabeza">cabeza</label>
          </div>

          <div>
            <input
              type="color"
              id="ojos"
              name="ojos"
              value={ojos}
              onChange={(e) => setOjos(e.target.value)}
            />
            <label for="ojos">ojos</label>
          </div>

          <div>
            <input
              type="color"
              id="cejas"
              name="cejas"
              value={cejas}
              onChange={(e) => setCejas(e.target.value)}
            />
            <label for="cejas">cejas</label>
          </div>

          <div>
            <input
              type="color"
              id="nariz"
              name="nariz"
              value={nariz}
              onChange={(e) => setNariz(e.target.value)}
            />
            <label for="nariz">nariz</label>
          </div>

          <div>
            <input
              type="color"
              id="orejas"
              name="orejas"
              value={orejas}
              onChange={(e) => setOrejas(e.target.value)}
            />
            <label for="orejas">orejas</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper4;
