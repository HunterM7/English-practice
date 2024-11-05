import { createBrowserRouter } from "react-router-dom";
import { LessonsPage } from "@pages/lessons-page/lessons-page";
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
      element: <LessonsPage />,
    },
    {
      path: "/profile",
      element: <div>Profile page</div>,
    }
  ]
} ];