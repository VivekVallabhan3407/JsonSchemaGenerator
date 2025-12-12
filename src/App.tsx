import Home from "@/pages/Home";
import "./styles/global.css";

import { JsonStateProvider } from "./hooks/useStateJson";

function App() {
  return (
    <JsonStateProvider>
      <Home />
    </JsonStateProvider>
  );
}

export default App;
