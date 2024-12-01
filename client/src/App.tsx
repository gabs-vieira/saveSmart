import { AppRouter } from "./routes/index.tsx";
import "../src/style.css"; // Importando o CSS global

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return <AppRouter />;
}

export default App;
