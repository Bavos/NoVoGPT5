import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import sceneData from '../../data/sceneData.json';
import {Scene1} from '../components/Scene1';
import {Scene2} from '../components/Scene2';
import {Scene3} from '../components/Scene3';
import {Scene4} from '../components/Scene4';
import {Scene5} from '../components/Scene5';
import {Scene6} from '../components/Scene6';

type SceneContent = {
  title: string;
  subtitle: string;
  mainText: string;
  futureNarration: string;
};

const FRAMES_PER_SCENE = 150;

const typedSceneData = sceneData as Record<`scene${1 | 2 | 3 | 4 | 5 | 6}`, SceneContent>;

export const MainComposition: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={FRAMES_PER_SCENE}>
        <Scene1 title={typedSceneData.scene1.title} subtitle={typedSceneData.scene1.subtitle} mainText={typedSceneData.scene1.mainText} />
      </Sequence>
      <Sequence from={FRAMES_PER_SCENE} durationInFrames={FRAMES_PER_SCENE}>
        <Scene2 title={typedSceneData.scene2.title} subtitle={typedSceneData.scene2.subtitle} mainText={typedSceneData.scene2.mainText} />
      </Sequence>
      <Sequence from={FRAMES_PER_SCENE * 2} durationInFrames={FRAMES_PER_SCENE}>
        <Scene3 title={typedSceneData.scene3.title} subtitle={typedSceneData.scene3.subtitle} mainText={typedSceneData.scene3.mainText} />
      </Sequence>
      <Sequence from={FRAMES_PER_SCENE * 3} durationInFrames={FRAMES_PER_SCENE}>
        <Scene4 title={typedSceneData.scene4.title} subtitle={typedSceneData.scene4.subtitle} mainText={typedSceneData.scene4.mainText} />
      </Sequence>
      <Sequence from={FRAMES_PER_SCENE * 4} durationInFrames={FRAMES_PER_SCENE}>
        <Scene5 title={typedSceneData.scene5.title} subtitle={typedSceneData.scene5.subtitle} mainText={typedSceneData.scene5.mainText} />
      </Sequence>
      <Sequence from={FRAMES_PER_SCENE * 5} durationInFrames={FRAMES_PER_SCENE}>
        <Scene6 title={typedSceneData.scene6.title} subtitle={typedSceneData.scene6.subtitle} mainText={typedSceneData.scene6.mainText} />
      </Sequence>
    </AbsoluteFill>
  );
};
