import { useState } from 'react'

const useOpenAndClose = (defaultOpen) => {
    const [open, setOpen] = useState(defaultOpen)

    const handleOnClick = () => {
        setOpen(!open)
    }

    return [open, setOpen, handleOnClick]
}

export default useOpenAndClose