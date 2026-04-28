import React from "react";
import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";

type Props = {
  title: string;
  subtitle: string;
  narration: string;
};

export const Scene4: React.FC<Props> = ({title, subtitle, narration}) => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 8) * 0.03;
  const opacity = interpolate(frame, [0, 15], [0, 1], {extrapolateRight: "clamp"});

  const chips = ["Arquivos", "Sistemas", "Ferramentas", "Pesquisas", "Precisão"];

  return (
    <AbsoluteFill
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        background:
          "radial-gradient(circle at 80% 20%, rgba(34,211,238,0.25), transparent 35%), linear-gradient(145deg, #0B0F17 0%, #1E1B4B 100%)",
        color: "#FFF",
        padding: "90px 110px"
      }}
    >
      <div style={{opacity}}>
        <h1 style={{fontSize: 86, margin: 0}}>{title}</h1>
        <h2 style={{fontSize: 44, marginTop: 14, color: "#C4B5FD"}}>{subtitle}</h2>
        <p style={{fontSize: 31, marginTop: 26, color: "#E2E8F0", maxWidth: 1220}}>{narration}</p>
      </div>

      <div style={{display: "flex", gap: 16, marginTop: 38, flexWrap: "wrap", transform: `scale(${pulse})`}}>
        {chips.map((chip) => (
          <div
            key={chip}
            style={{
              padding: "12px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.08)",
              fontSize: 24
            }}
          >
            {chip}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
