import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../UseAuth/UseAuth";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = UseAuth();

  if (loading) {
    return (
      <span className="loading loading-bars loading-lg ml-72 mx-auto"></span>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivetRoute;
