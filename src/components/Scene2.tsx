import React from "react";
import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";

type Props = {
  title: string;
  subtitle: string;
  narration: string;
};

export const Scene2: React.FC<Props> = ({title, subtitle, narration}) => {
  const frame = useCurrentFrame();
  const cardY = interpolate(frame, [0, 40], [40, 0], {extrapolateRight: "clamp"});
  const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: "clamp"});

  return (
    <AbsoluteFill
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        background: "linear-gradient(120deg, #0A0F1E 0%, #101A36 45%, #101522 100%)",
        color: "white",
        padding: "90px 110px",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 75% 20%, rgba(124,58,237,0.35), transparent 45%), radial-gradient(circle at 20% 80%, rgba(34,211,238,0.2), transparent 40%)"
        }}
      />
      <h1 style={{fontSize: 92, margin: 0, letterSpacing: -1, position: "relative", zIndex: 2}}>{title}</h1>
      <h2 style={{fontSize: 48, marginTop: 18, color: "#A78BFA", position: "relative", zIndex: 2}}>{subtitle}</h2>

      <div
        style={{
          marginTop: 42,
          width: 980,
          borderRadius: 24,
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.24)",
          padding: "28px 34px",
          transform: `translateY(${cardY}px)`,
          opacity,
          position: "relative",
          zIndex: 2
        }}
      >
        <p style={{fontSize: 32, margin: 0, color: "#E5E7EB"}}>{narration}</p>
      </div>

      <div style={{position: "absolute", right: 120, bottom: 130, fontSize: 28, color: "#22D3EE"}}>
        &lt;/&gt; reasoning.optimize()
      </div>
    </AbsoluteFill>
  );
};
