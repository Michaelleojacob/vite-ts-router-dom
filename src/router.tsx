import { createBrowserRouter } from "react-router-dom";
import Tasks from "./pages/tasks/tasks";
import Counter from "./pages/counter/counter";
import App from "./app";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/counter",
        element: <Counter />,
      },
      { path: "/tasks", element: <Tasks /> },
    ],
  },
]);

export default router;
