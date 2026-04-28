import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../styles/theme';

type SceneProps = {
  title: string;
  subtitle: string;
  mainText: string;
};

const chips = ['Arquivos', 'Sistemas', 'Ferramentas', 'Pesquisas', 'Precisão'];

export const Scene4: React.FC<SceneProps> = ({title, subtitle, mainText}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const chipEntry = spring({frame, fps, config: {damping: 14, stiffness: 90}});
  const opacity = interpolate(frame, [0, 18, 120, 150], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill
      style={{
        fontFamily: theme.font,
        color: theme.colors.white,
        padding: `${theme.spacing.pageY}px ${theme.spacing.pageX}px`,
        background:
          'radial-gradient(circle at 80% 10%, rgba(34,211,238,0.25), transparent 35%), linear-gradient(140deg, #0A0F1D 0%, #1D1A48 100%)',
        opacity
      }}
    >
      <h1 style={{fontSize: 86, margin: 0}}>{title}</h1>
      <h2 style={{fontSize: 44, marginTop: 14, color: '#C4B5FD'}}>{subtitle}</h2>
      <p style={{fontSize: 31, marginTop: 24, color: theme.colors.mutedWhite, maxWidth: 1240}}>{mainText}</p>

      <div style={{display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 36}}>
        {chips.map((chip, index) => (
          <div
            key={chip}
            style={{
              padding: '12px 20px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.28)',
              background: 'rgba(255,255,255,0.09)',
              backdropFilter: 'blur(8px)',
              fontSize: 25,
              transform: `translateY(${(1 - chipEntry) * (40 + index * 4)}px)`
            }}
          >
            {chip}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
