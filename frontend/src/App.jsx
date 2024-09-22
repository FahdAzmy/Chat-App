import Login from "./pages/login/Login";

function App() {
  return (
    <div className=" bg-white">
      <h1 className="font-bold text-2xl bg-white  text-amber-800  ">Talkie</h1>
      <div className=" bg-white w-full h-screen flex items-center justify-center">
        <Login />
      </div>
    </div>
  );
}

export default App;
