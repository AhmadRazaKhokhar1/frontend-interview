// React Router DOM
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// UI
import { AppBar, HomePage, NavBar } from "./lib/UI";

// CSS
import "./App.css";

function App() {
  return (
    <div className="w-screen min-h-screen overflow-hidden m-auto items-center self-center app-cont">
      <div className="w-full flex flex-col">
        <AppBar />
        <NavBar />
      </div>

      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
