import React from "react";
import myContext from "./Context";

import { useState } from "react";
function Parent({ children }) {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  return (
    <div className="App">
      <h2>Parent Component</h2>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button style={{marginLeft:"8px"}}
        onClick={() => {
          setData2(data);
          setData("")
        }}
      >
        send data
      </button>
      <hr />
      <myContext.Provider value={data2}>{children}</myContext.Provider>
    </div>
  );
}

export default Parent;
