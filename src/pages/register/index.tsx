import { Button, Form, Input } from "antd";
import { JordanLogo, Nikelogo } from "../../components/icons/IconSvg";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import loginService from "../../services/loginService";

export const RegisterPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState("");
  const [isLogin, setIsLogin] = useState<boolean>();
  const navigate = useNavigate();
  const { users, setUsers } = useContext(AppContext);
  const url = useLocation();

  useEffect(() => {
    if (url.pathname == "/register") {
      setIsLogin(false);
    } else if (url.pathname == "/login") {
      setIsLogin(true);
    }
  }, [url.pathname]);

  const handleRegister = () => {
    if (isLogin) {
      navigate("/register");
      return;
    }

    const newUser = {
      email: email,
      password: password,
    };

    const isExistUser = users.some((user) => user.email == newUser.email);
    if (!isExistUser) {
      setIsError("");
      setUsers([...users, newUser]);
      console.log(users);
      navigate("/login");
    } else {
      setIsError("This user is existed");
    }
  };

  const handleLogin = async (event: Event) => {
    event.preventDefault();
    const result = await loginService.login(email, password);
    console.log(result);

    const token = result.accessToken;
    if (token) {
      localStorage.setItem("token", token);
      alert("Login Success!!!");
      navigate("/");
    } else {
      alert("Something is wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[460px] min-w-[250px] mx-[36px] w-full">
        <div className="flex items-center">
          <Nikelogo />
          <JordanLogo />
        </div>
        <h1 className="p-3 pl-0 text-3xl">
          Enter your email to join us or sign in.
        </h1>
        <form className="pt-3">
          <Form.Item layout="vertical" label="Email">
            <Input
              type="text"
              placeholder="Email"
              className="p-4"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item layout="vertical" label="Password">
            <Input
              type="password"
              placeholder="Password"
              className="p-4"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          {isError && <p className="text-red-600">{isError}</p>}
          <p className="p-6 pl-0 text-gray-500">
            By continuing, I agree to Nike's{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Use.
            </a>
          </p>
          <div className="flex justify-end">
            <Button
              className="bg-black text-white rounded-full capitalize px-6 py-5 font-bold text"
              onClick={handleRegister}
            >
              Register
            </Button>
            {isLogin && (
              <Button
                className="bg-black text-white rounded-full capitalize px-6 py-5 font-bold text"
                onClick={(e: any) => handleLogin(e)}
              >
                Log in
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
