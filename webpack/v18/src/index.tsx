import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div>
    <p>
      <span>ReactV18</span>
    </p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
console.log(root);
root.render(<App />);
