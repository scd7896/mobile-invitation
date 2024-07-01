import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MobileLayout from "./layout/MobileLayout";
import Main from "./pages/Main";
import Story from "./pages/Story";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/story",
    element: <Story />,
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
