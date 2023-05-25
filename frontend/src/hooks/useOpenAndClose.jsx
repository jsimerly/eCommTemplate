import { useEffect, useState } from 'react'

const useOpenAndClose = (defaultOpen) => {
    const [open, setOpen] = useState(defaultOpen)

    const handleOnClick = () => {
        setOpen(open => !open)
        // console.log('here')
    }

    useEffect(() => {
        console.log(open)
    },[open])

    return [open, setOpen, handleOnClick]
}

export default useOpenAndClose