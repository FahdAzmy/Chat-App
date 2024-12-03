import LeftImgs from "../../components/SideBar/LeftImgs";
import LoginForm from "../../components/forms/LoginForm";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Redirect to home page if already logged in
    }
  }, [isLoggedIn, navigate]);
  return (
    <div className=" bg-white w-full h-screen flex items-center justify-center">
      <div className="flex w-full h-screen rounded-2xl max-lg:w-full ma bg-gray-100">
        {/* Right-Sida Login Form  */}
        <LoginForm />
        {/* Right side - Images */}
        <LeftImgs />
      </div>
    </div>
  );
};

export default Login;
