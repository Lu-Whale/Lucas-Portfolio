import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400 border-primary-500 "
    : "text-[#ADB7BE] border-slate-600 hover:border-white hover:text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
