import React from "react";
import {
  AbsoluteFill,
  Composition,
  Sequence
} from "remotion";
import sceneData from "../data/sceneData.json";
import {Scene1} from "./components/Scene1";
import {Scene2} from "./components/Scene2";
import {Scene3} from "./components/Scene3";
import {Scene4} from "./components/Scene4";
import {Scene5} from "./components/Scene5";
import {Scene6} from "./components/Scene6";

const FPS = 30;
const DURATION_PER_SCENE = 5 * FPS;
const TOTAL_DURATION = 6 * DURATION_PER_SCENE;

type SceneProps = {
  title: string;
  subtitle: string;
  narration: string;
};

const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: "#0B0F17"}}>
      <Sequence from={0} durationInFrames={DURATION_PER_SCENE}>
        <Scene1 {...(sceneData.scene1 as SceneProps)} />
      </Sequence>
      <Sequence from={DURATION_PER_SCENE} durationInFrames={DURATION_PER_SCENE}>
        <Scene2 {...(sceneData.scene2 as SceneProps)} />
      </Sequence>
      <Sequence from={DURATION_PER_SCENE * 2} durationInFrames={DURATION_PER_SCENE}>
        <Scene3 {...(sceneData.scene3 as SceneProps)} />
      </Sequence>
      <Sequence from={DURATION_PER_SCENE * 3} durationInFrames={DURATION_PER_SCENE}>
        <Scene4 {...(sceneData.scene4 as SceneProps)} />
      </Sequence>
      <Sequence from={DURATION_PER_SCENE * 4} durationInFrames={DURATION_PER_SCENE}>
        <Scene5 {...(sceneData.scene5 as SceneProps)} />
      </Sequence>
      <Sequence from={DURATION_PER_SCENE * 5} durationInFrames={DURATION_PER_SCENE}>
        <Scene6 {...(sceneData.scene6 as SceneProps)} />
      </Sequence>
    </AbsoluteFill>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="GPT55Launch"
        component={MainVideo}
        durationInFrames={TOTAL_DURATION}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
