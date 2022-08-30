import React from "react";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Model from "./Model";
import  * as THREE from 'three'

const Wrapper = ({ ...props }) => {
  const [mesh, setMesh] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [sole, setSole] = useState("#ffffff");
  const [laces, setLaces] = useState("#ffffff");
  const [caps, setCaps] = useState("#ffffff");
  const [inner, setInner] = useState("#ffffff");
  const [band, setBand] = useState("#ffffff");
  const [patch, setPatch] = useState("#ffffff");

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
              <Model
                customColors={{
                  mesh: mesh,
                  stripes: stripes,
                  sole: sole,
                  laces: laces,
                  caps: caps,
                  inner: inner,
                  band: band,
                  patch: patch,
                  shoe: props.customShoes.shoe,
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
              id="mesh"
              name="mesh"
              value={mesh}
              onChange={(e) => setMesh(e.target.value)}
            />
            <label for="mesh">Principal</label>
          </div>

          <div>
            <input
              type="color"
              id="stripes"
              name="stripes"
              value={stripes}
              onChange={(e) => setStripes(e.target.value)}
            />
            <label for="stripes">lineas</label>
          </div>

          <div>
            <input
              type="color"
              id="sole"
              name="sole"
              value={sole}
              onChange={(e) => setSole(e.target.value)}
            />
            <label for="sole">suela</label>
          </div>
          <div>
            <input
              type="color"
              id="laces"
              name="laces"
              value={laces}
              onChange={(e) => setLaces(e.target.value)}
            />
            <label for="laces">cinta</label>
          </div>

          <div>
            <input
              type="color"
              id="caps"
              name="caps"
              value={caps}
              onChange={(e) => setCaps(e.target.value)}
            />
            <label for="caps">hoyos</label>
          </div>

          <div>
            <input
              type="color"
              id="inner"
              name="inner"
              value={inner}
              onChange={(e) => setInner(e.target.value)}
            />
            <label for="inner">dentro</label>
          </div>

          <div>
            <input
              type="color"
              id="band"
              name="band"
              value={band}
              onChange={(e) => setBand(e.target.value)}
            />
            <label for="band">banda</label>
          </div>

          <div>
            <input
              type="color"
              id="patch"
              name="patch"
              value={patch}
              onChange={(e) => setPatch(e.target.value)}
            />
            <label for="patch">parche</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
