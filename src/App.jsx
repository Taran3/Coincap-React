import { Home } from "./pages/Home.jsx";
import { Exchanges } from "./pages/Exchanges.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Asset } from "./pages/Asset.jsx";
import { Exchange } from "./pages/Exchange.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/exchanges",
    element: <Exchanges />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/exchange",
    element: <Exchange />,
  },
  {
    path: "/assets/:id",
    element: <Asset />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
