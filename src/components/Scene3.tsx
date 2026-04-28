import React from "react";
import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";

type Props = {
  title: string;
  subtitle: string;
  narration: string;
};

const codeLines = [
  "fix(bug): resolve async race condition",
  "refactor(project): clean architecture modules",
  "review(code): suggest safer typing",
  "automate(ci): build + render + artifact"
];

export const Scene3: React.FC<Props> = ({title, subtitle, narration}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 18], [0, 1], {extrapolateRight: "clamp"});

  return (
    <AbsoluteFill
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        background: "linear-gradient(135deg, #070B14 0%, #111827 100%)",
        color: "#FFFFFF",
        padding: "90px 110px"
      }}
    >
      <h1 style={{fontSize: 82, margin: 0, letterSpacing: -1}}>{title}</h1>
      <h2 style={{fontSize: 44, marginTop: 16, color: "#22D3EE"}}>{subtitle}</h2>

      <div style={{marginTop: 28, fontSize: 31, maxWidth: 1300, color: "#E5E7EB"}}>{narration}</div>

      <div
        style={{
          marginTop: 36,
          width: 1200,
          borderRadius: 20,
          padding: "22px 26px",
          background: "rgba(2,6,23,0.8)",
          border: "1px solid rgba(56,189,248,0.35)",
          opacity
        }}
      >
        {codeLines.map((line, i) => (
          <div
            key={line}
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: 26,
              marginBottom: 10,
              color: i % 2 ? "#A78BFA" : "#67E8F9",
              transform: `translateX(${Math.sin((frame + i * 10) / 12) * 8}px)`
            }}
          >
            {">"} {line}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
