import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(props.customColors.arbol);
  return (
    <group ref={group} {...props} dispose={null} scale={0.5}>
      <group position={[0, -4, 1]} rotation={[0, 90, 0]}>
        <mesh
          geometry={nodes.Cube007.geometry}
          material={materials.Cube007}
          material-color={props.customColors.tronco}
          position={[0, -0.5, 0]}
        />

        <mesh
          geometry={nodes.Cube007_1.geometry}
          material={materials.Cube007_1}
          material-color={props.customColors.hojas}
          position={[0, -0.5, 0]}
        />
      </group>
    </group>
  );
}
