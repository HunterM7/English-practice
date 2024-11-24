import { createBrowserRouter } from "react-router-dom";
import { LessonsPage } from "@pages/lessons-page/lessons-page";
import { LessonPage } from "@pages/lesson-page/lesson-page";
import { TrainerPage } from "@pages/trainer-page/trainer-page";
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
      path: "/lessons/:lessonName",
      element: <LessonPage />,
    },
    {
      path: "/trainer",
      element: <TrainerPage />,
      loader: async () => {
        const exercises = [{
          question: 'Я люблю гулять',
          options: ['I', 'climbing', 'we', 'he', 'walking', 'like', 'watching', 'work', 'bathing'],
          answer: 'I like walking',
          totalOptionsLength: 3,
        }]
        return { exercises };
      }
    },
    {
      path: "/profile",
      element: <div>Profile page</div>,
    }
  ]
} ];