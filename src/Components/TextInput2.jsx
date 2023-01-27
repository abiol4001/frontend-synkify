import React from "react";

function TextInput2(props) {
    const {id, title} = props;
  return (
    <div className="flex flex-col">
      <label className="font-bold text-[#191819] text-base" htmlFor={id}>
        {title}
      </label>
      <input
        {...props}
        className="bg-[#F5F5F5] border text-sm py-2 px-3 mt-2 border-[#013135] focus:outline-none focus:border-[#013135] focus:ring-2 rounded-lg"
        
      />
    </div>
  );
}

export default TextInput2;
