import React from "react";
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";

type Props = {
  title: string;
  subtitle: string;
  narration: string;
};

const baseStyle: React.CSSProperties = {
  fontFamily: "Inter, SF Pro Display, Arial, sans-serif",
  color: "#FFFFFF",
  padding: "90px 110px"
};

export const Scene1: React.FC<Props> = ({title, subtitle, narration}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const titleScale = spring({frame, fps, config: {damping: 12, stiffness: 120}});
  const opacity = interpolate(frame, [0, 18], [0, 1], {extrapolateRight: "clamp"});

  return (
    <AbsoluteFill
      style={{
        ...baseStyle,
        background:
          "radial-gradient(circle at 20% 20%, #2563EB 0%, transparent 40%), radial-gradient(circle at 80% 30%, #7C3AED 0%, transparent 35%), linear-gradient(135deg, #0B0F17 0%, #121826 100%)",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(90deg, rgba(34,211,238,0.06) 0, rgba(34,211,238,0.06) 1px, transparent 1px, transparent 70px)"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 120,
          right: 120,
          width: 420,
          height: 260,
          borderRadius: 26,
          background: "linear-gradient(135deg, rgba(37,99,235,0.25), rgba(34,211,238,0.2))",
          border: "1px solid rgba(255,255,255,0.22)",
          transform: `translateY(${Math.sin(frame / 20) * 12}px)`
        }}
      />
      <div style={{position: "relative", zIndex: 2, opacity}}>
        <h1
          style={{
            fontSize: 110,
            lineHeight: 1,
            margin: 0,
            fontWeight: 800,
            letterSpacing: -2,
            transform: `scale(${0.95 + titleScale * 0.05})`,
            textShadow: "0 0 30px rgba(34,211,238,0.35)"
          }}
        >
          {title}
        </h1>
        <h2 style={{fontSize: 50, marginTop: 24, color: "#22D3EE", fontWeight: 600}}>{subtitle}</h2>
        <p style={{fontSize: 33, marginTop: 36, maxWidth: 1300, color: "#E2E8F0"}}>{narration}</p>
      </div>
    </AbsoluteFill>
  );
};
