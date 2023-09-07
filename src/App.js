import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import HomePage from "./Pages/HomePage";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage></HomePage> },
    { path: "/dashboard", element: <DashboardPage></DashboardPage> },
  ]);

  return (
    <div className="App">
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
