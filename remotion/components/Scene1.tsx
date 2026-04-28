import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../styles/theme';

type SceneProps = {
  title: string;
  subtitle: string;
  mainText: string;
};

export const Scene1: React.FC<SceneProps> = ({title, subtitle, mainText}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const entry = spring({frame, fps, config: {damping: 14, stiffness: 110}});
  const opacity = interpolate(frame, [0, 20, 120, 150], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill
      style={{
        fontFamily: theme.font,
        padding: `${theme.spacing.pageY}px ${theme.spacing.pageX}px`,
        color: theme.colors.white,
        background:
          'radial-gradient(circle at 20% 10%, rgba(37,99,235,0.45), transparent 45%), radial-gradient(circle at 85% 20%, rgba(124,58,237,0.4), transparent 45%), linear-gradient(135deg, #090C14 0%, #141B2C 100%)',
        opacity,
        overflow: 'hidden'
      }}
    >
      <div style={{position: 'absolute', inset: 0, background: 'repeating-linear-gradient(90deg, rgba(34,211,238,0.06) 0px, rgba(34,211,238,0.06) 1px, transparent 1px, transparent 78px)'}} />
      <div
        style={{
          position: 'absolute',
          top: 110,
          right: 120,
          width: 460,
          height: 260,
          borderRadius: theme.radius.xl,
          border: '1px solid rgba(255,255,255,0.25)',
          background: 'linear-gradient(130deg, rgba(34,211,238,0.28), rgba(124,58,237,0.26))',
          backdropFilter: 'blur(8px)',
          transform: `translateY(${Math.sin(frame / 18) * 14}px)`
        }}
      />

      <div style={{position: 'relative', zIndex: 3, transform: `translateY(${(1 - entry) * 30}px)`}}>
        <h1 style={{fontSize: 108, margin: 0, lineHeight: 1, letterSpacing: -2}}>{title}</h1>
        <h2 style={{fontSize: 50, marginTop: 20, color: theme.colors.cyan}}>{subtitle}</h2>
        <p style={{fontSize: 34, marginTop: 34, maxWidth: 1260, color: theme.colors.mutedWhite}}>{mainText}</p>
      </div>
    </AbsoluteFill>
  );
};
