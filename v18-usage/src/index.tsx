import ReactDOM from "react-dom/client";
import { App } from "@/app";

const root = ReactDOM.createRoot(document.getElementById("root")!, {
  identifierPrefix: "react-18-",
});
console.log(root);
root.render(<App />);
