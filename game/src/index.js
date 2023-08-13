
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import How from "../src/pages/How";
import Play from "../src/pages/Play";
import Scoreboard from "../src/pages/Scoreboard";
import Scoreholder from "./pages/ScoreHolder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/scoreboard",
    element: <Scoreboard />
  },
  {
    path: "/how_to_play",
    element: <How />
  },
  {
    path: "/play",
    element: <Play />
  },
  {
    path: "/scoreholder",
    element: <Scoreholder />
  }
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<RouterProvider router={router} />);
