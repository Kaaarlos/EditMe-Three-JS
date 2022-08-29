import React from "react";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import ModelAstro from "./ModelAstro";
import * as THREE from "three";

const Wrapper3 = ({ ...props }) => {
  const [traje, setTraje] = useState("#ffffff");
  const [vidrio, setVidrio] = useState("#ffffff");
  const [botones, setBotones] = useState("#ffffff");
  const [botas, setBotas] = useState("#ffffff");

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
              <ModelAstro
                customColors={{
                  traje: traje,
                  vidrio: vidrio,
                  botones: botones,
                  botas: botas,
                  astro: props.customAstro.astro,
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
              id="traje"
              name="traje"
              value={traje}
              onChange={(e) => setTraje(e.target.value)}
            />
            <label for="traje">traje</label>
          </div>

          <div>
            <input
              type="color"
              id="vidrio"
              name="vidrio"
              value={vidrio}
              onChange={(e) => setVidrio(e.target.value)}
            />
            <label for="vidrio">vidrio</label>
          </div>

          <div>
            <input
              type="color"
              id="botones"
              name="botones"
              value={botones}
              onChange={(e) => setBotones(e.target.value)}
            />
            <label for="botones">botones</label>
          </div>

          <div>
            <input
              type="color"
              id="botas"
              name="botas"
              value={botas}
              onChange={(e) => setBotas(e.target.value)}
            />
            <label for="botas">botas</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper3;
