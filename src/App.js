import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import HomePage from "./Pages/HomePage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage></HomePage> },
    { path: "/dashboard", element: <DashboardPage></DashboardPage> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<DashboardPage />} />
    </div>
  );
}

export default App;
