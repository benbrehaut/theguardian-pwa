import React, { useState } from 'react'

export const MenuContext = React.createContext({
    menuOpen: false,
    setMenu: () => {}
})

export const MenuContextProvider = (props) => {
    const setMenu = (triggerMenu) => {
        setState({...state, menuOpen: triggerMenu})
    }

    const initState = {
        menuOpen: false,
        setMenu: setMenu
    }

    const [state, setState] = useState(initState)

    return (
        <MenuContext.Provider value={state}>
            {props.children}
        </MenuContext.Provider>
    )
}