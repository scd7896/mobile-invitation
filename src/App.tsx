import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MobileLayout from "./layout/MobileLayout";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

function App() {
  return (
    <MobileLayout>
      <RouterProvider router={router} />
    </MobileLayout>
  );
}

export default App;
