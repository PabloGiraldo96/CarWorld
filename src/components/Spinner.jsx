import { Canvas } from "@react-three/fiber";
import "../assets/styles/Loading.css";
import { Html } from "@react-three/drei";

export const Spinner = () => {
  return (
    <Canvas>
      <Html>
        <div className="lds-heart">
          <div> </div>
        </div>
      </Html>
    </Canvas>
  );
};
