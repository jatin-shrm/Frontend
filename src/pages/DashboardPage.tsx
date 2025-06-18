import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

function DashboardPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  return <div>Hello {user?.full_name}</div>;
}

export default DashboardPage;
