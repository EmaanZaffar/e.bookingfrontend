import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { AppContextProvider } from "./context/AppContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
