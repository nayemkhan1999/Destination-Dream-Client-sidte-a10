import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div>
      <div className="container mx-auto averia-serif">
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
