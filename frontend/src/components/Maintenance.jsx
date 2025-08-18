import React from "react";
import { Link } from "react-router-dom";

const Maintenance = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
                <div className="text-7xl md:text-9xl">🚧</div>
                <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mt-4">
                    Under Construction
                </h1>
                <p className="text-gray-600 mt-2 text-lg md:text-xl max-w-md">
                    This page is currently being built. Please check back soon!
                </p>

                <Link
                    to="/"
                    className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-xl font-medium hover:bg-yellow-600 transition duration-200">
                    Go Back Home
                </Link>
            </div>
        </>
    );
};

export default Maintenance;
