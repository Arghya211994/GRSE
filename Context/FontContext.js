import React, { createContext, useState } from 'react';

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const font = 16;
  const [size, setSize] = useState(font);

  const increase = () => {
    if (size < 20) {
      setSize(size + 1);
    }
    console.log(size)
    // or
    //this code is also valid
    // if(size === 20){

    // }else{
    //     setSize(size + 1)
    // }
    // console.log(size)
  };

  const normal = () => {
    setSize(font);
  };

  const decrease = () => {
    if (size > 12) {
      setSize(size - 1);
    }
  };

  const fontVariables = {
    size,
    increase,
    normal,
    decrease,
  };

  return (
    <FontContext.Provider value={fontVariables}>
      {children}
    </FontContext.Provider>
  );
};
