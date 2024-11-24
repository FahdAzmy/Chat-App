import LeftImgs from "../../components/SideBar/LeftImgs";
import LoginForm from "../../components/forms/LoginForm";

const Login = () => {
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
