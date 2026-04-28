import React from "react";
import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";

type Props = {
  title: string;
  subtitle: string;
  narration: string;
};

export const Scene6: React.FC<Props> = ({title, subtitle, narration}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: "clamp"});

  return (
    <AbsoluteFill
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        background:
          "radial-gradient(circle at 20% 10%, rgba(34,211,238,0.22), transparent 40%), radial-gradient(circle at 80% 85%, rgba(124,58,237,0.24), transparent 35%), linear-gradient(135deg, #0A0F1D 0%, #0F172A 100%)",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "80px"
      }}
    >
      <div style={{opacity}}>
        <h1 style={{fontSize: 98, margin: 0, lineHeight: 1.05, letterSpacing: -1}}>{title}</h1>
        <h2 style={{fontSize: 44, marginTop: 22, color: "#22D3EE"}}>{subtitle}</h2>
        <p style={{fontSize: 31, marginTop: 30, color: "#E2E8F0"}}>{narration}</p>
      </div>
    </AbsoluteFill>
  );
};
