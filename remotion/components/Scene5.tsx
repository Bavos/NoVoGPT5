import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../styles/theme';

type SceneProps = {
  title: string;
  subtitle: string;
  mainText: string;
};

export const Scene5: React.FC<SceneProps> = ({title, subtitle, mainText}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const blockEntry = spring({frame, fps, config: {damping: 15, stiffness: 105}});
  const opacity = interpolate(frame, [0, 16, 120, 150], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const leftX = interpolate(blockEntry, [0, 1], [-110, 0]);
  const rightX = interpolate(blockEntry, [0, 1], [110, 0]);

  return (
    <AbsoluteFill
      style={{
        fontFamily: theme.font,
        color: theme.colors.white,
        padding: `${theme.spacing.pageY}px ${theme.spacing.pageX}px`,
        background: 'linear-gradient(120deg, #020617 0%, #0F172A 35%, #172554 100%)',
        opacity
      }}
    >
      <h1 style={{fontSize: 84, margin: 0}}>{title}</h1>
      <h2 style={{fontSize: 42, marginTop: 16, color: theme.colors.cyan}}>{subtitle}</h2>
      <p style={{fontSize: 31, marginTop: 24, color: theme.colors.mutedWhite, maxWidth: 1280}}>{mainText}</p>

      <div style={{display: 'flex', gap: 24, marginTop: 40}}>
        <div
          style={{
            flex: 1,
            borderRadius: theme.radius.lg,
            border: '1px solid rgba(147,197,253,0.45)',
            background: 'rgba(37,99,235,0.22)',
            padding: '24px',
            backdropFilter: 'blur(8px)',
            transform: `translateX(${leftX}px)`
          }}
        >
          <div style={{fontSize: 22, color: '#BFDBFE'}}>Remotion</div>
          <div style={{fontSize: 30, marginTop: 8}}>Vídeo codificado com visual premium</div>
        </div>
        <div
          style={{
            flex: 1,
            borderRadius: theme.radius.lg,
            border: '1px solid rgba(196,181,253,0.5)',
            background: 'rgba(124,58,237,0.24)',
            padding: '24px',
            backdropFilter: 'blur(8px)',
            transform: `translateX(${rightX}px)`
          }}
        >
          <div style={{fontSize: 22, color: '#DDD6FE'}}>GitHub Actions</div>
          <div style={{fontSize: 30, marginTop: 8}}>Build + MP4 automático para download</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
