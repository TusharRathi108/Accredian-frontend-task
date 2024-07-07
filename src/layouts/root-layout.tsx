import NavBar from "@/components/nav-bar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-600 to-slate-950 p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
