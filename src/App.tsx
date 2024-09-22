import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import DashBoard from "./components/DashBoard/DashBoard";

function App() {
  const PrivateRoute = ({ element }: { element: JSX.Element }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return isLoggedIn ? element : <Navigate to="/" />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "dashboard",
      element: <PrivateRoute element={<DashBoard />} />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
