import React from "react";


const FeaturesCard = ({ FeatureTitle, FeatureDescription }) => {
    return (
        <>
            <div className="h-[130px] p-4 bg-white rounded-2xl m-0 shadow-md lg:h-[175px] hover:translate-y-[-10px] transition delay-10 duration-300">
                <h3 className="font-pacifico text-[14px] text-dark-brown mb-1 sm:text-[16px] lg:text-[18px] xl:w-[359px] 2xl:w-[450px]">
                    {FeatureTitle}
                </h3>
                <p className="font-poppins font-medium text-[12px] text-muted-gray sm:text-[14px]">
                    {FeatureDescription}
                </p>
            </div>
        </>
    );
};

export default FeaturesCard;
