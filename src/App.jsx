/* eslint-disable react/no-unknown-property */
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";
import { NewCarTowersScene } from "./components/NewCarTowersScene";

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
    <KeyboardControls map={map}>
      <Canvas shadows camera={{ position: [2, 10, 15], fov: 50 }}>
        <Suspense>
          <Physics gravity={[0, -35, 0]}>
            <Experience />
            <NewCarTowersScene />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  );
}

export default App;
