import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-7xl font-extrabold text-primary font-karla">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mt-4 font-lexend">Page Not Found</h2>
      <p className="text-gray-600 mt-2 font-karla">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 flex items-center gap-2.5 bg-primary text-white px-5 py-3 rounded-lg shadow hover:bg-[#414141] hover:text-primary transition"
      >
        <FaHome className="text-2xl font-lexend" /> Back to Home
      </Link>
    </div>
  );
};

export default NotFound;