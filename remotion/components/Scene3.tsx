import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from '../styles/theme';

type SceneProps = {
  title: string;
  subtitle: string;
  mainText: string;
};

const codeLines = [
  'codex.fix("race condition")',
  'github.actions("build + render")',
  'review("types + architecture")',
  'automate("release video")'
];

export const Scene3: React.FC<SceneProps> = ({title, subtitle, mainText}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const entry = spring({frame, fps, config: {damping: 16, stiffness: 120}});
  const opacity = interpolate(frame, [0, 15, 120, 150], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill
      style={{
        fontFamily: theme.font,
        color: theme.colors.white,
        padding: `${theme.spacing.pageY}px ${theme.spacing.pageX}px`,
        background: 'linear-gradient(135deg, #050913 0%, #111827 100%)',
        opacity
      }}
    >
      <h1 style={{fontSize: 84, margin: 0}}>{title}</h1>
      <h2 style={{fontSize: 44, marginTop: 14, color: theme.colors.cyan}}>{subtitle}</h2>
      <p style={{fontSize: 31, marginTop: 24, maxWidth: 1260, color: '#CBD5E1'}}>{mainText}</p>

      <div
        style={{
          marginTop: 34,
          width: 1240,
          borderRadius: theme.radius.lg,
          border: '1px solid rgba(34,211,238,0.35)',
          background: 'rgba(2,6,23,0.82)',
          padding: '24px 28px',
          backdropFilter: 'blur(6px)',
          transform: `translateX(${(1 - entry) * 50}px)`
        }}
      >
        {codeLines.map((line, index) => (
          <div
            key={line}
            style={{
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: 28,
              marginBottom: 10,
              color: index % 2 === 0 ? '#67E8F9' : '#A78BFA',
              transform: `translateX(${Math.sin((frame + index * 8) / 11) * 10}px)`
            }}
          >
            {'>'} {line}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
