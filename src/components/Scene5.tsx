import React from "react";
import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";

type Props = {
  title: string;
  subtitle: string;
  narration: string;
};

export const Scene5: React.FC<Props> = ({title, subtitle, narration}) => {
  const frame = useCurrentFrame();
  const left = interpolate(frame, [0, 40], [-120, 0], {extrapolateRight: "clamp"});
  const right = interpolate(frame, [0, 40], [120, 0], {extrapolateRight: "clamp"});

  return (
    <AbsoluteFill
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        background: "linear-gradient(120deg, #020617 0%, #0F172A 40%, #172554 100%)",
        color: "#FFF",
        padding: "90px 110px",
        overflow: "hidden"
      }}
    >
      <h1 style={{fontSize: 84, margin: 0}}>{title}</h1>
      <h2 style={{fontSize: 42, marginTop: 16, color: "#22D3EE"}}>{subtitle}</h2>
      <p style={{fontSize: 31, marginTop: 24, color: "#E2E8F0", maxWidth: 1300}}>{narration}</p>

      <div style={{display: "flex", gap: 24, marginTop: 42}}>
        <div
          style={{
            transform: `translateX(${left}px)`,
            flex: 1,
            borderRadius: 20,
            padding: "22px",
            background: "rgba(37,99,235,0.2)",
            border: "1px solid rgba(147,197,253,0.45)"
          }}
        >
          <div style={{fontSize: 23, color: "#BFDBFE"}}>Remotion</div>
          <div style={{fontSize: 30, marginTop: 6}}>Render profissional com código</div>
        </div>
        <div
          style={{
            transform: `translateX(${right}px)`,
            flex: 1,
            borderRadius: 20,
            padding: "22px",
            background: "rgba(124,58,237,0.2)",
            border: "1px solid rgba(196,181,253,0.5)"
          }}
        >
          <div style={{fontSize: 23, color: "#DDD6FE"}}>GitHub Actions</div>
          <div style={{fontSize: 30, marginTop: 6}}>Pipeline automático até MP4</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
