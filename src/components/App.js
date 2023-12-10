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
      <h1>
        Temperature:
        <b style={{ color: data.temperature > Threshold ? "red" : "blue" }}>
          {data.temperature}
        </b>
      </h1>
      <h1>conditions:{data.conditions}</h1>
    </div>
  );
};

export default App;
