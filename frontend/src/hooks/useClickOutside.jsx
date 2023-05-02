import { useRef, useEffect } from "react";

let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let domHandler = (e) => {

            if (!domNode.current?.contains(e.target)){
                handler(false);
            }
        }
        document.addEventListener('mousedown', domHandler)

        return () => (
            document.removeEventListener('mousedown', domHandler)
        )
    })

    return domNode
}

export default useClickOutside