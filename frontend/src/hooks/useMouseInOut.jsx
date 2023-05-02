import React, { useState, useRef, useEffect } from 'react';
// ... (import other dependencies)

//Courtesy of CHATGPT
export const useMouseInOut = (handlerInOut) => {
  const ref = useRef();

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (ref.current && !ref.current.contains(e.relatedTarget)) {
        handlerInOut(true);
      }
    };
    const handleMouseOut = (e) => {
      if (ref.current && !ref.current.contains(e.relatedTarget)) {
        handlerInOut(false);
      }
    };

    const elem = ref.current;
    elem.addEventListener('mouseover', handleMouseOver);
    elem.addEventListener('mouseout', handleMouseOut);

    return () => {
      elem.removeEventListener('mouseover', handleMouseOver);
      elem.removeEventListener('mouseout', handleMouseOut);
    };
  }, [handlerInOut]);

  return ref;
};
