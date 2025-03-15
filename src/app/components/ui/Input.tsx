// * Module
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className = "", ...rest }: InputProps) => {
  return (
    <input
      className={`
        w-full
        px-4
        py-2
        border
        border-[#EAE5EB]
        rounded-lg
        text-base
        text-[#281030]
        placeholder-[#522E5E]
        placeholder:font-light
        focus:outline-none
        focus:ring-1
        focus:ring-[#281030]
        bg-white
        ${className}
      `}
      {...rest}
    />
  );
};

export default Input;
