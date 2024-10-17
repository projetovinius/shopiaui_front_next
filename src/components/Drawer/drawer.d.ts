interface DrawerProps {
    toggleDrawer:  (newOpen: boolean) => void
    setOpen:  Dispatch<SetStateAction<boolean>>
}

export {
    DrawerProps
}