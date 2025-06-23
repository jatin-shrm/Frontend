import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import type { AppDispatch } from "../store/store";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function DashboardPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <Navbar onLogout={handleLogout} />
      <div className="flex">
        {/* Main content */}
        <main className="flex-1 p-6 md:ml-80">
          <div className="max-w-7xl mx-auto">
            {/* Dashboard content will go here */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
