import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loginform from "./Components/Loginform";
import RegisterForm from "./Components/RegisterForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loginform />}></Route>
        <Route path="/signup" element={<RegisterForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
