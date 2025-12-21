import Home from "@/pages/Home";
import "./styles/global.css";
import "./styles/theme.css";

import { JsonStateProvider } from "./hooks/useStateJson";

function App() {
  return (
    <JsonStateProvider>
      <Home />
    </JsonStateProvider>
  );
}

export default App;
