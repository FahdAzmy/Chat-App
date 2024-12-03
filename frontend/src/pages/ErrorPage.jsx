import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  text-black ">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">The page you are looking for does not exist.</p>
        <Link
          to="/"
          replace={true}
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
