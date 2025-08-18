import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Feedback from "./pages/Feedback.jsx";
import BrowseMessage from "./pages/BrowseMessage.jsx";
import Home from "./pages/Home.jsx";
import App from "./App.jsx";
import SaveMessage from "./pages/SaveMessage.jsx";
import ViewMessage from "./pages/ViewMessage.jsx";
import Error404 from "./components/Error404.jsx"


const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/Home",
                element: <Home />,
            },
            {
                path: "/BrowseMessage",
                element: <BrowseMessage />,
            },
            {
                path: "/BrowseMessage/ViewMessage",
                element: <ViewMessage />,
            },
            {
                path: "/Feedback",
                element: <Feedback />,
            },
            {
                path: "/SaveMessage",
                element: <SaveMessage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
