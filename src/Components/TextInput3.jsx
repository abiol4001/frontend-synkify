import React from "react";

function TextInput(props) {
    const {id, title} = props;
  return (
    <div className="flex flex-col">
      {/* <label className="font-bold text-[#191819] text-base" htmlFor={id}>
        {title}
      </label> */}
      <input
        {...props}
        className="bg-white placeholder-[#696869] border-0 border-b border-[#414041] text-sm lg:text-lg py-3 px-1 mt-2"
        
      />
    </div>
  );
}

export default TextInput;
