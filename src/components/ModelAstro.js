import {  useGLTF  } from "@react-three/drei";
import {  useRef } from "react";

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } =useGLTF(props.customColors.astro)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -0.8, 1]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials.traje} material-color={props.customColors.traje}/>
        <mesh geometry={nodes.Cube001_1.geometry} material={materials.vidrio} material-color={props.customColors.vidrio}/>
        <mesh geometry={nodes.Cube001_2.geometry} material={materials.botones} material-color={props.customColors.botones}/>
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.botas} material-color={props.customColors.botas}/>
        <mesh geometry={nodes.Cube001_4.geometry} material={materials.banderaV} />
        <mesh geometry={nodes.Cube001_5.geometry} material={materials.bandera} />
        <mesh geometry={nodes.Cube001_6.geometry} material={materials.banderaR} />
      </group>
    </group>
  )
}






