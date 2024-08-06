/* eslint-disable react/no-unknown-property */
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo } from "react";
import { KeyboardControls, Html } from "@react-three/drei";
//import { NewCarTowersScene } from "./components/NewCarTowersScene";
import { NewCarScene } from "./components/NewCarScene";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

function App() {
  const map = useMemo(
    () => [
      {
        name: Controls.forward,
        keys: ["ArrowUp", "KeyW"],
      },
      {
        name: Controls.back,
        keys: ["ArrowDown", "KeyS"],
      },
      {
        name: Controls.left,
        keys: ["ArrowLeft", "KeyA"],
      },
      {
        name: Controls.right,
        keys: ["ArrowRight", "KeyD"],
      },
      {
        name: Controls.jump,
        keys: ["Space"],
      },
    ],
    []
  );

  return (
    <>
      <KeyboardControls map={map}>
        <Canvas shadows camera={{ position: [2, 10, 15], fov: 50 }}>
          <Suspense>
            <Physics gravity={[0, -35, 0]}>
              <Experience />
              {/*<NewCarTowersScene />*/}
              <NewCarScene />
            </Physics>
          </Suspense>
          <Html position={[0, 0, 0]}>
            <div className="wasd">W S A D </div>
            <div className="restart"> R to restart </div>
          </Html>
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
