import React from "react";

const FeaturesCard = ({ FeatureTitle, FeatureDescription }) => {
    return (
        <>
            <div className="max-fit h-[130px] p-4 bg-white rounded-2xl shadow-md m-0">
                <h3 className="font-pacifico text-[14px] text-dark-brown mb-1">
                    {FeatureTitle}
                </h3>
                <p className="font-poppins font-medium text-[12px] text-muted-gray">
                    {FeatureDescription}
                </p>
            </div>
        </>
    );
};

export default FeaturesCard;
