import React from "react";

function TextInput(props) {
    const {id, title} = props;
  return (
    <div className="flex flex-col">
      <label className="font-bold text-[#191819] text-base" htmlFor={id}>
        {title}
      </label>
      <input
        {...props}
        className="bg-[#EBEAEB] border-0 border-b border-[#414041] text-sm py-2 px-1 mt-2"
        
      />
    </div>
  );
}

export default TextInput;
