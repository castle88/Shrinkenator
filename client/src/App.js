import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Link from "./pages/Link";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:link" element={<Link />} />
      </Routes>
    </Router>
  );
}

export default App;
