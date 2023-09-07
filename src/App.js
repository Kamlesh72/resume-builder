import { RouterProvider, createHashRouter } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import HomePage from "./Pages/HomePage";

function App() {
  const router = createHashRouter(
    [
      { path: "/", element: <HomePage></HomePage> },
      { path: "/dashboard", element: <DashboardPage></DashboardPage> },
    ],
    { basename: "/resume-builder" }
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
