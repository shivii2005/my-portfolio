import React from "react";
import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const CertificateCard = ({ imgsrc, title, viewLink }) => {
    return (
        <div className="group w-[480px] h-[250px] rounded-xl overflow-hidden relative border border-[#B6B09F] bg-white dark:bg-[#1a1a1a] shadow-lg transition-transform duration-500 mb-6">

            <img
                src={imgsrc}
                alt={title}
                className="w-full h-full object-cover group-hover:blur-[2px] transition-all duration-300"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-4
  bg-black/60 dark:bg-black/80 text-white dark:text-white">

                <h3 className="text-white dark:text-white font-semibold text-center text-lg mb-3 px-2">
                    {title}
                </h3>
                <NavLink
                    to={viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-white text-black dark:bg-black dark:text-white border border-white dark:border-white px-4 py-2 rounded-md hover:bg-transparent hover:text-white dark:hover:text-white dark:hover:bg-transparent transition-all duration-300 dark:border "
                >
                    <FaEye /> View
                </NavLink>
            </div>
        </div>
    );
};

export default CertificateCard;
