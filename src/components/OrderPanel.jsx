import { useState } from "react";

export default function OrderPanel({ selected, orderType, setOrderType }) {
  const [amount, setAmount] = useState("0.1");
  const [slippage, setSlippage] = useState("1");
  const [flash, setFlash] = useState(null);

  const doTrade = () => {
    setFlash(orderType);
    setTimeout(() => setFlash(null), 1500);
  };

  return (
    <div style={{
      width: 240, background: "#060a10",
      borderLeft: "1px solid #ffffff08",
      display: "flex", flexDirection: "column",
      padding: 12, overflowY: "auto",
    }}>
      {flash && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 999,
          background: flash === "buy" ? "#00e67620" : "#ff174420",
          display: "flex", alignItems: "center", justifyContent: "center",
          pointerEvents: "none",
        }}>
          <div style={{ color: flash === "buy" ? "#00e676" : "#ff1744", fontSize: 32, fontWeight: 900 }}>
            {flash === "buy" ? "⚡ BOUGHT!" : "💸 SOLD!"}
          </div>
        </div>
      )}
      <div style={{ color: "#ffffff30", fontSize: 9, letterSpacing: 2, marginBottom: 10 }}>ORDER PANEL</div>
      <div style={{ display: "flex", marginBottom: 10, background: "#0b1220", borderRadius: 8, padding: 3 }}>
        {["buy", "sell"].map(t => (
          <button key={t} onClick={() => setOrderType(t)} style={{
            flex: 1, padding: "7px 0", borderRadius: 6,
            background: orderType === t ? (t === "buy" ? "#00e676" : "#ff1744") : "transparent",
            border: "none",
            color: orderType === t ? (t === "buy" ? "#000" : "#fff") : "#ffffff40",
            fontSize: 12, fontWeight: 900, cursor: "pointer", textTransform: "uppercase",
          }}>{t}</button>
        ))}
      </div>
      <div style={{ color: "#ffffff30", fontSize: 9, letterSpacing: 1, marginBottom: 6 }}>AMOUNT (SOL)</div>
      <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
        {["0.1", "0.25", "0.5", "1"].map(a => (
          <button key={a} onClick={() => setAmount(a)} style={{
            flex: 1, padding: "6px 0", borderRadius: 5,
            background: amount === a ? "#00e67614" : "#0b1826",
            border: `1px solid ${amount === a ? "#00e67640" : "#ffffff0e"}`,
            color: amount === a ? "#00e676" : "#ffffff40",
            fontSize: 10, fontWeight: 700, cursor: "pointer",
          }}>{a}</button>
        ))}
      </div>
      <div style={{ color: "#ffffff25", fontSize: 10, marginBottom: 12 }}>Fee: 0.2% · Via Jupiter</div>
      <button onClick={doTrade} style={{
        width: "100%", padding: "13px 0", borderRadius: 10,
        background: orderType === "buy"
          ? "linear-gradient(135deg,#00e676,#00b85e)"
          : "linear-gradient(135deg,#ff1744,#cc1036)",
        border: "none",
        color: orderType === "buy" ? "#000" : "#fff",
        fontSize: 14, fontWeight: 900, cursor: "pointer",
      }}>
        {orderType === "buy" ? "⚡ BUY NOW" : "💸 SELL NOW"}
      </button>
    </div>
  );
}
