import { useEffect } from "react";

const useDebounce = (changeValue, func) => (
  useEffect(() => {
    const delayDebouncFn = setTimeout(()=>{
      func()
    }, 1000)
    return () => clearTimeout(delayDebouncFn)
  },[changeValue])
)

export default useDebounce