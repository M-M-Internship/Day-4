
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DASHBOARD";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}   />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
