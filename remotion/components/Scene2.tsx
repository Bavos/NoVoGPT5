import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../styles/theme';

type SceneProps = {
  title: string;
  subtitle: string;
  mainText: string;
};

export const Scene2: React.FC<SceneProps> = ({title, subtitle, mainText}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const cardEntrance = spring({frame, fps, config: {damping: 15, stiffness: 100}});
  const opacity = interpolate(frame, [0, 15, 120, 150], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill
      style={{
        fontFamily: theme.font,
        color: theme.colors.white,
        padding: `${theme.spacing.pageY}px ${theme.spacing.pageX}px`,
        background: 'linear-gradient(120deg, #070C18 0%, #0F1B35 45%, #131329 100%)',
        opacity,
        overflow: 'hidden'
      }}
    >
      <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(circle at 85% 12%, rgba(124,58,237,0.45), transparent 40%), radial-gradient(circle at 15% 90%, rgba(34,211,238,0.22), transparent 45%)'}} />
      <h1 style={{fontSize: 92, margin: 0, position: 'relative', zIndex: 2}}>{title}</h1>
      <h2 style={{fontSize: 48, marginTop: 16, color: '#A78BFA', position: 'relative', zIndex: 2}}>{subtitle}</h2>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          marginTop: 44,
          width: 1080,
          borderRadius: theme.radius.lg,
          border: '1px solid rgba(255,255,255,0.24)',
          background: 'rgba(255,255,255,0.09)',
          backdropFilter: 'blur(10px)',
          boxShadow: theme.shadows.card,
          padding: '30px 36px',
          transform: `translateY(${(1 - cardEntrance) * 48}px) scale(${0.95 + cardEntrance * 0.05})`
        }}
      >
        <p style={{margin: 0, fontSize: 32, color: '#E5E7EB'}}>{mainText}</p>
      </div>
    </AbsoluteFill>
  );
};
