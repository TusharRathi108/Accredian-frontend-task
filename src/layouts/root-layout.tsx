import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Components
import NavBar from "@/components/nav-bar";

const RootLayout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />
      <section className="flex flex-1 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-600 to-slate-950 p-5">
        <Outlet />
      </section>
      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
    </main>
  );
};

export default RootLayout;
