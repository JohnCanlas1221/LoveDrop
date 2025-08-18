import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
                <h1 className="text-9xl font-extrabold text-rose-500 tracking-widest">
                    404
                </h1>
                <p className="text-xl md:text-2xl font-medium text-gray-700 mt-4">
                    Oops! Page not found.
                </p>
                <p className="text-gray-500 mt-2">
                    The page you’re looking for doesn’t exist or was moved.
                </p>

                <Link
                    to="/"
                    className="mt-6 px-6 py-3 bg-rose-500 text-white rounded-xl font-medium hover:bg-rose-600 transition duration-200">
                    Go Home
                </Link>
            </div>
        </>
    );
};

export default Error404;
