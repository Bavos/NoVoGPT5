import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../styles/theme';

type SceneProps = {
  title: string;
  subtitle: string;
  mainText: string;
};

export const Scene6: React.FC<SceneProps> = ({title, subtitle, mainText}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const entry = spring({frame, fps, config: {damping: 13, stiffness: 95}});
  const opacity = interpolate(frame, [0, 20, 130, 150], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill
      style={{
        fontFamily: theme.font,
        color: theme.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '80px',
        background:
          'radial-gradient(circle at 18% 12%, rgba(34,211,238,0.22), transparent 40%), radial-gradient(circle at 85% 80%, rgba(124,58,237,0.28), transparent 40%), linear-gradient(135deg, #0A0F1D 0%, #0F172A 100%)',
        opacity
      }}
    >
      <div
        style={{
          borderRadius: theme.radius.xl,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.22)',
          backdropFilter: 'blur(12px)',
          padding: '42px 56px',
          transform: `scale(${0.94 + entry * 0.06})`
        }}
      >
        <h1 style={{fontSize: 98, margin: 0, lineHeight: 1.05, letterSpacing: -1}}>{title}</h1>
        <h2 style={{fontSize: 44, marginTop: 22, color: theme.colors.cyan}}>{subtitle}</h2>
        <p style={{fontSize: 31, marginTop: 30, color: theme.colors.mutedWhite, maxWidth: 1300}}>{mainText}</p>
      </div>
    </AbsoluteFill>
  );
};
