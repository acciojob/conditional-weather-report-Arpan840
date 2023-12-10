import React from "react";
import "./../styles/App.css";

const App = () => {
  const data = { temperature: 25, conditions: "Sunny" };
  let Threshold = 20;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Do not remove the main div */}
      <p>
        Temperature:<span style={{ color: data.temperature > Threshold ? "red" : "blue" }}>
          {data.temperature}
        </span>
      </p>
      <p>conditions:{data.conditions}</p>
    </div>
  );
};

export default App;
