import RootLayout from "@/layouts/root-layout";
import LandingPage from "@/pages/landing-page";
import { createBrowserRouter } from "react-router-dom";

// create router paths
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <LandingPage /> }],
  },
]);

// export router as default
export default router;
