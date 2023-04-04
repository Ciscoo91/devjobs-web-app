import React, {useContext} from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import './Button.css'

type ButtonProps = {
    children: React.ReactNode,
    text?: string
}

export default function Button({children}: ButtonProps) {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <button className={`button ${theme}`}>{children}</button>
    )
}
