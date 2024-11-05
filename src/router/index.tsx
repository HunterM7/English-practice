import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import { LessonsPage } from "../pages/lessons-page/lessons-page";

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
      element: <LessonsPage />,
    },
    {
      path: "/profile",
      element: <div>Profile page</div>,
    }
  ]
} ];