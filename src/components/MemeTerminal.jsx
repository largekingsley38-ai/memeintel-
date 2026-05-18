import { useState } from "react";
import TokenList from "./TokenList.jsx";
import TopNav from "./TopNav.jsx";
import OrderPanel from "./OrderPanel.jsx";
import ChartPanel from "./ChartPanel.jsx";

export default function MemeTerminal() {
  const [selected, setSelected] = useState(null);
  const [orderType, setOrderType] = useState("buy");

  return (
    <div style={{
      width: "100%", minHeight: "100vh",
      background: "#080c14",
      fontFamily: "'Courier New', monospace",
      display: "flex", flexDirection: "column",
      color: "#e0e8f0",
    }}>
      <TopNav selected={selected} />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <TokenList onSelect={setSelected} selected={selected} />
        <ChartPanel selected={selected} />
        <OrderPanel selected={selected} orderType={orderType} setOrderType={setOrderType} />
      </div>
    </div>
  );
}
