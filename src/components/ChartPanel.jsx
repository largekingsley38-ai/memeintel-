export default function ChartPanel({ selected }) {
  if (!selected) return (
    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "#080c14" }}>
      <div style={{ color: "#ffffff20", fontSize: 14 }}>← Select a token to view chart</div>
    </div>
  );

  const bars = Array.from({ length: 40 }, (_, i) => ({
    h: 40 + Math.sin(i * 0.4 + selected.id) * 30 + Math.random() * 20,
    bull: Math.random() > 0.45,
  }));

  return (
    <div style={{ flex: 1, background: "#080c14", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ padding: "8px 14px", borderBottom: "1px solid #ffffff08", display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 20 }}>{selected.icon}</span>
        <span style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>{selected.name}</span>
        <span style={{ color: selected.change > 0 ? "#00e676" : "#ff1744", fontWeight: 700 }}>
          {selected.change > 0 ? "+" : ""}{selected.change}%
        </span>
        <span style={{ color: "#ffffff40", fontSize: 11 }}>MC: ${selected.mcap} · Vol: ${selected.vol}</span>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", padding: "16px", gap: 2 }}>
        {bars.map((b, i) => (
          <div key={i} style={{
            flex: 1, height: `${b.h}%`,
            background: b.bull ? "#00e676" : "#ff1744",
            borderRadius: 1, opacity: 0.85,
          }} />
        ))}
      </div>
    </div>
  );
}
