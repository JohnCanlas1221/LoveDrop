import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Feedback from "./pages/Feedback.jsx";
import BrowseNote from "./pages/BrowseNote.jsx";
import Home from "./pages/Home.jsx";
import App from "./App.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
        errorElement: <div>404 not Found</div>,
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
                path: "/BrowseNote",
                element: <BrowseNote />,
            },
            {
                path: "/Feedback",
                element: <Feedback />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
