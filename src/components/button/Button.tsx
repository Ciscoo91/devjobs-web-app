import React, {useContext} from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import './Button.css'

type ButtonProps = {
    children: React.ReactNode,
    classNames?: string
    setShowModal?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Button({children, classNames, setShowModal}: ButtonProps) {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <button className={`button ${classNames}`} onClick={() => setShowModal}>{children}</button>
    )
}
