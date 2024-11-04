import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";

export const router: Parameters<typeof createBrowserRouter>[0] = [ {
  path: "/",
  element: <Root/>,
  children: [
    {
      path: "/",
      element: <div>Home page</div>,
    },
    {
      path: "/lessons",
      element: <div>Lessons page</div>,
    },
    {
      path: "/profile",
      element: <div>Profile page</div>,
    }
  ]
} ];