// import "./classBased/App.css";
// import Container from "./classBased/components/Container";

import "./functionBased/App.css";
import Container from "./functionBased/components/Container";
import { Route, Routes } from "react-router-dom";
import NotMatch from "./pages/NotMatch";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Container />} />
      <Route path="/about" component={About} element={<About />} />
      <Route path="/not-match" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
