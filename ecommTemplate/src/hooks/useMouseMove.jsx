import React, { useState, useRef, useEffect } from 'react';
// ... (import other dependencies)

//Also made by CHATGPT
export const useMouseMove = (handlerInOut) => {
    // Create a ref to be attached to the parent element
    const ref = useRef();
  
    // Set up a side effect that will run when the component mounts and unmounts
    useEffect(() => {
      // Define the event handler for the 'mousemove' event
      const handleMouseMove = (e) => {
        // Check if the current ref is defined and if the event target is a child of the ref's current element
        if (ref.current && ref.current.contains(e.target)) {
          // Call the provided handlerInOut function with true, indicating the mouse is inside the element
          handlerInOut(true);
        } else {
          // Call the provided handlerInOut function with false, indicating the mouse is outside the element
          handlerInOut(false);
        }
      };
  
      // Get the current element of the ref
      const elem = ref.current;
      // Add the 'mousemove' event listener to the element
      elem.addEventListener('mousemove', handleMouseMove);
  
      // Clean up the effect by removing the event listener when the component unmounts
      return () => {
        elem.removeEventListener('mousemove', handleMouseMove);
      };
    }, [handlerInOut]); // Re-run the effect if the handlerInOut function changes
  
    // Return the ref to be attached to the element that needs to be monitored for mouse movements
    return ref;
  };