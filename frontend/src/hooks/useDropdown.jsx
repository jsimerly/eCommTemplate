import useClickOutside from "./useClickOutside";
import useOpenAndClose from "./useOpenAndClose";

const useDropdown = (defaultOpen) => {
    const [open, setOpen, handleOnClick] = useOpenAndClose(defaultOpen)

    let node = useClickOutside(()=>setOpen(false))

    return [open, setOpen, handleOnClick, node]
}

export default useDropdown