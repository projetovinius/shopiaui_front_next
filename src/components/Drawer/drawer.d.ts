interface DrawerProps {
    toggleDrawer:  (newOpen: boolean) => void
    setOpen:  Dispatch<SetStateAction<boolean>>
    onNavigate: (route: string) => void;
}

export {
    DrawerProps
}