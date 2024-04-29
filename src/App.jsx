import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import AuthProvider from "./Components/AuthProvider/AuthProvider";

function App() {
  return (
    <div>
      <div className="container  mx-auto averia-serif">
        <Nav></Nav>
        <AuthProvider />
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
