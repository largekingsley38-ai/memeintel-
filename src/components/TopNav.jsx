export default function TopNav({ selected }) {
  return (
    <div style={{
      display: "flex", alignItems: "center",
      background: "#060a10", borderBottom: "1px solid #ffffff0e",
      padding: "0 12px", height: 42,
    }}>
      <div style={{ color: "#00e676", fontSize: 15, fontWeight: 900, letterSpacing: 2, marginRight: 20 }}>
        MEMEINTEL
      </div>
      {["Trending", "New Pairs", "Whales", "Scanner"].map(n => (
        <button key={n} style={{
          background: "none", border: "none", color: "#ffffff45",
          fontSize: 11, fontWeight: 600, cursor: "pointer", padding: "0 10px", height: "100%",
        }}>{n}</button>
      ))}
      <div style={{ flex: 1 }} />
      <div style={{ color: "#00e676", fontSize: 10, fontWeight: 700 }}>
        {selected ? `● ${selected.name}` : "● LIVE"}
      </div>
    </div>
  );
}
