import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth/authService";

function AuthComponent({ children }: any) {
  const navigate = useNavigate();

  function checkLogin() {
    if (AuthService.getToken()) {
      navigate("/");
    } else {
      navigate("/register");
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return <div> {children}</div>;
}
export default AuthComponent;
