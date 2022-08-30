import {  useGLTF  } from "@react-three/drei";
import {  useRef } from "react";

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } =useGLTF(props.customColors.gato)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.46, 0.94, 0.36]} scale={[0.12, 0.21, 0.11]}>
        <mesh geometry={nodes.Mesh.geometry} material={materials.bigotes}  material-color={props.customColors.bigotes} />
        <mesh geometry={nodes.Mesh_1.geometry} material={materials.cabeza}  material-color={props.customColors.cabeza}/>
        <mesh geometry={nodes.Mesh_2.geometry} material={materials.ojos}  material-color={props.customColors.ojos}/>
        <mesh geometry={nodes.Mesh_3.geometry} material={materials.cejas}  material-color={props.customColors.cejas}/>
        <mesh geometry={nodes.Mesh_4.geometry} material={materials.nariz}  material-color={props.customColors.nariz}/>
        <mesh geometry={nodes.Mesh_5.geometry} material={materials.orejas}  material-color={props.customColors.orejas}/>
      </group>
    </group>
  )
}






