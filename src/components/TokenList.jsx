const TOKENS = [
  { id:1, name:"PEPE2", icon:"🐸", price:0.000042, change:182.4, vol:"890K", mcap:"2.4M", risk:"SAFE" },
  { id:2, name:"BONK2", icon:"🔨", price:0.00213, change:34.2, vol:"1.1M", mcap:"5.6M", risk:"SAFE" },
  { id:3, name:"DOGWIF3", icon:"🐶", price:0.0081, change:12.7, vol:"2.3M", mcap:"8.1M", risk:"CAUTION" },
  { id:4, name:"MOON", icon:"🌙", price:0.00088, change:44.1, vol:"670K", mcap:"3.2M", risk:"SAFE" },
  { id:5, name:"RUGBAIT", icon:"💀", price:0.00000091, change:-62.1, vol:"44K", mcap:"180K", risk:"DANGER" },
];

const rc = l => ({ SAFE:"#00e676", CAUTION:"#ffab00", DANGER:"#ff1744" }[l]);
const fmt = p => p < 0.0001 ? p.toFixed(9) : p < 0.001 ? p.toFixed(7) : p.toFixed(4);

export default function TokenList({ onSelect, selected }) {
  return (
    <div style={{
      width: 200, background: "#060a10",
      borderRight: "1px solid #ffffff08",
      display: "flex", flexDirection: "column",
    }}>
      <div style={{ padding: "8px 10px", borderBottom: "1px solid #ffffff08", color: "#ffffff30", fontSize: 10, letterSpacing: 2 }}>
        TRENDING
      </div>
      {TOKENS.map(tok => (
        <div key={tok.id} onClick={() => onSelect(tok)} style={{
          padding: "10px 12px", borderBottom: "1px solid #ffffff05",
          background: selected?.id === tok.id ? "#0d1f35" : "transparent",
          borderLeft: selected?.id === tok.id ? "2px solid #00e676" : "2px solid transparent",
          cursor: "pointer",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 16 }}>{tok.icon}</span>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 12 }}>{tok.name}</span>
            <span style={{ color: rc(tok.risk), fontSize: 8, fontWeight: 800 }}>●</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
            <span style={{ color: "#ffffff60", fontSize: 10 }}>${fmt(tok.price)}</span>
            <span style={{ color: tok.change > 0 ? "#00e676" : "#ff1744", fontSize: 10, fontWeight: 700 }}>
              {tok.change > 0 ? "+" : ""}{tok.change}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
