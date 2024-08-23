/* eslint-disable react/no-unknown-property */
import { Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export const Experience = () => {
  return (
    <>
      {/*<OrbitControls />*/}
      <ambientLight intensity={0.6} />
      <directionalLight position={[-10, 10, 0]} intensity={2.4} />

      <RigidBody position={[3, 5, 0]} colliders={"ball"}>
        <Sphere>
          <meshStandardMaterial color="white" />
        </Sphere>
      </RigidBody>
    </>
  );
};
